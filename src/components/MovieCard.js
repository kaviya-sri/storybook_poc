import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const MovieCard = ({ spacing = 2, direction = "row" ,backgroundColor}) => {

    MovieCard.proptype = {
        backgroundColor : PropTypes.string,
        spacing : PropTypes.number,
        direction: PropTypes.oneOf(["row", "column"]),
    }
    const style = {
        display: "flex",
        backgroundColor ,
        gap: `${spacing * 0.25}rem`,
        flexDirection: direction,
      }

    return(
        <div style={style} >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );

};
export default MovieCard;