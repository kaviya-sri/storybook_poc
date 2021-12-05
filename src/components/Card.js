import React from 'react';
import '../style/Card.css';
import PropTypes from 'prop-types';
import Alita from '../PNG/Alita.png';

const Card = ({handleClick, variant1 = 'movieTitle', variant2 = 'movie2Title', variant3 = 'year'}) => {

    Card.proptype= {
        variant1: PropTypes.string,
        variant2: PropTypes.string,
        variant3:PropTypes.string,
    }

    return(
        <div>
            <div className="wholediv " >
                <div className="textalignoverimage " >
                    <span className="premium">PREMIUM</span>
                    <span className="plus">+</span>
                    <img  className="rc" src ={Alita} alt="Alita" width="185px" height="272px" onClick={handleClick}/>
                </div>
                <div className="bottomArea rcbot " >
                    <div className={variant1}>Alita: Battle Angels </div>
                    <div className={variant2}>Re-Release</div>
                    <div className={variant3}>2019  .  English</div>
                </div>
            </div>
        </div>
    );

};
export default Card;