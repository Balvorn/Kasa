import './banner.scss'

export default function Banner({ img, text = "" }) {
    return (
        <div className='banner'>
            <img src={img} alt='landscape'></img>
            <h1>{text}</h1>
        </div>
    )
}