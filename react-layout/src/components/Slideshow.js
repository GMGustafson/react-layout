import "../css/SlideShow.css";
import {useState} from "react";

const SlideShow = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$)/)
    );

    return (
        <div id="slideshow">
            <img src={images[0]} alt={images[0]} />
            <button>Previous</button>
            <button>Next</button>
        </div>
    )
};

export default SlideShow;