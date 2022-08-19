import './Cards.scss'

import movie from "../assets/movie.svg"
import statua from "../assets/statua.svg"

export function Cards(){
    return(
            <div className="card">
                <div className="card-img">
                    <img src={movie}/>
                </div>
                <div className="card-details">
                    <span className='datails-title'>Movie title</span>
                    <span className='datails-minutes'>179 min</span>
                   <div className="details-container">
                    <img className='img-statua' src={statua}/>
                    <span className='details-wins'>Wins & 6 Nominations</span>
                   </div>
                   <div className="details-footer">
                    <div className="budget">
                        <span className='details-budget'>Budget</span>
                        <span className='details-budget-price'>$94M</span>
                    </div>
                    <div className="revenue">
                        <span className='details-revenue'>Revenue</span>
                        <span className='details-revenue-price'>$926M</span>
                    </div>
                   </div>
                </div>
                </div>
    )
}