import './Header.scss'
import arrow from "../assets/arrow.svg"

export function Header(){
    return(
        <div className="wrapper">
        <div className='header'>
         <div className="header-text">
            <h1>Lord of the Rings Movies</h1>
            <span>Ave. movie runtime: xxx min</span>
            <span>Ave. movie budget: $XXM</span>
         </div>
         <div className="header-buttons">
            <input type="text" placeholder='Finter movies by name'/>
            <button>Sort by budget <img src={arrow}></img></button>
         </div>
        </div>
        </div>
    )
}