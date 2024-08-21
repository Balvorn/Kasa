import { useState } from 'react';
import arrow from "../../assets/arrow.svg"
import './carousel.scss'

export default function Carousel({pictures}) {
    const [index, setIndex] = useState(0);
    const length = pictures.length;
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="carousel">
            <img src={pictures[index]} alt="photo du logement" />
            {length > 1 && <>
                <button className="control left" onClick={handlePrevious}><img src={arrow} alt="previous" /></button>
                <button className="control right" onClick={handleNext}><img src={arrow} alt="previous" /></button>
                <p className="index">{index + 1}/{length}</p>
            </>
            }


        </div>
    );
}