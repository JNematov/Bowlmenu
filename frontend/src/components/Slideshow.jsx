import axios from "axios";
import { useState, useEffect} from "react";

const Slideshow = ({slidesUrl}) => {

    const [slides, setSlides] = useState([])
    const [i, setI] = useState(0)
    const [inMotion, setInMotion] = useState(true)


    const moveRight = () => {
        if(i === slides.length - 1){
            setI(0);
        }else {
            setI(i + 1);
        }
    }

    let timeout;
    if(inMotion){ if (slides.length > 0)  setTimeout(moveRight, 10000) }

    useEffect(() => {
        axios.get(slidesUrl).then(result => {setSlides(result.data)})
    }, [slidesUrl])

    return ( 
        <div className="slide-show">
            <button className="left">{"<"}</button>
            {slides.length !== 0 && 
                <div className="slide">
                    <h2 className="title">{slides[i].title}</h2>
                    <button className="pause" onClick={() => {
                        setInMotion(!inMotion);
                    }}>{inMotion ? '| |' : '►'}</button>
                    <img alt="slideImg" src={require('../images/'+slides[i].source)}/>
                    {/* <h3>{slide.date}</h3> */}
                    <div><p className="slide-description">{slides[i].description}</p></div> 
                </div>
            }
            <button className="right" onClick={() => {
                clearTimeout(timeout) 
                setInMotion(false)
                moveRight()
            }}>{">"}</button>
        </div>
     );
}
 
export default Slideshow