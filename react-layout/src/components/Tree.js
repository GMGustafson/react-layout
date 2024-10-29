import "../css/Tree.css"; 
import {useState} from "react"; 

const Tree = (tree) => 
{ 
    const[pruned, pruneTree] = useState(false); 

    const doTreeJob = () => 
    { 
        pruneTree(true); 
    }


    return ( 
        <section className= "tree">
            <h3 className={pruned?"pruned":""}> {tree.name}</h3>
            <img src={tree.image} alt={tree.name}/>
            <button onClick ={doTreeJob}> Purne Tree </button>
        </section>
    )
}; 


export default Tree; 