import React from "react";
import './Card.css';
import { Link } from "react-router-dom";


const Card = ({drinks, color, backgroundColor, skewed, cocktailName}) => {
    
    console.log(`ingredients${color}`)
    return (
        <div>
            <Link to="/"/>
            <img height="403" width="536"  src={drinks.strDrinkThumb}/>
            <div style={{position:"relative"}}>
              <div className={`${backgroundColor} ${skewed} `}></div>
              <h1 className={`${cocktailName}`}>{drinks.strDrink}</h1>
            </div>
          <div className="body">
            <h3 className="title">Glass</h3>
            <span className="bodyGlass">{drinks.strGlass}</span>
            <h3 className="title">Category</h3>
            <span className="bodyCategory">{drinks.strIBA}</span>
            <div className="ingredients">
            <h3 className="title">Ingredients</h3> <h3 style={{marginLeft: "14px"}}><span className={`${color}`}>{drinks.strIngredient1}</span>  <span className={`${color}`}> {drinks.strIngredient2}</span>  <span className={`${color}`}> {drinks.strIngredient3}</span></h3>
            </div>
            <h3 className="title">Instructions</h3>
             <span className="bodyInstructions">{drinks.strInstructions}</span>
          </div>     
        </div>
        );
    };
export default Card;