
import Tree from "../components/Tree.js"; 
import "../css/Home.css"; 

const Home = () => {
    return (
        <div className = "trees"> 
            <Tree name="bald cypress" image = "images/bald.jpg" /> 
            <Tree name = "eastern redbud" image = "images/red-bud.jpg" /> 
            <Tree name = "live oak" image = "images/live-oak.jpg" /> 
        </div>
    )
};

export default Home; 