import {useState, useEffect } from "react";
import axios from "axios";
import HousePlan from "./HousePlan";
import AddHousePlan from "./AddHousePlans";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false); 

    //wait until after page is rendered to do the asyncronous loading
    useEffect(()=>{
        (async() => {
            const response = await axios.get("http://localhost:3001/api/house_plans");
            setHouses(response.data);
        })();
    },[]);

    const openAddDialog = () => { 
        setShowAddDialog(true); 
    };
    const closeAddDialog = () => {
        setShowAddDialog(false); 
    };
    const updateHousePlans = (housePlan) => {
        setHouses((houses)=>[...houses, housePlan]);
    };

    return (
       <div className="house-plans">
        <h3>House Plans</h3>

        <button id ="addHouse" onClick={openAddDialog}>+</button>
        
        {showAddDialog ?(
            <AddHousePlan closeDialog={closeAddDialog} showNewHouse={updateHousePlans}
            />):("")}
        


        {houses.map((housePlan)=>(
            <HousePlan
                name={housePlan.name} 
                size={housePlan.size}
                bedrooms={housePlan.bedrooms}
                bathrooms={housePlan.bathrooms} />
        ))}
       </div>
    );
};

export default HousePlans;