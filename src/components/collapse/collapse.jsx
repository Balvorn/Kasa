import './collapse.scss'
import { useState } from 'react';
import arrow from '../../assets/arrow.svg'
export default function Collapse({ title = "", text = "" }) {
    const [active, setActive] = useState(false);


    function handleClick() {
        setActive(active => !active);
    }
    return (
        <>
            <div className='collapse' onClick={handleClick}>
                <span>{title}</span>
                <img src={arrow} className="logo" alt="arrow" />
            </div>
            <div className="content"> <p className={active ?
                'display' : "hidden"}>{text}</p></div>

        </>
    )
}