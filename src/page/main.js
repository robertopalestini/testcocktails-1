import React, { useEffect, useState } from "react";
import Card from "../components/Cocktail/Card";
import "./main.css";
// import { Link } from "react-router-dom";
import { cocktailsService } from "../services/cocktailsService";


const Main = () => {
    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await cocktailsService.getCocktails().then(res => {
                console.log(res)
                let drinksTotal = [];
                for (let i = 0; i < 3; i++) {
                    drinksTotal.push(res.data.drinks[i]);
                }
                setDrinks(drinksTotal);
                console.log(drinksTotal)
            })
        }
        fetchData();


    }, [])
    if (!drinks) {
        return <div>Loading...</div>
    }
    return (
        <div  className="Main">
            <div className="cardBlue">
                <Card  drinks={drinks[0]} color={"ingredientsBlue"} backgroundColor={"cocktailBlue"} skewed={"skewedBlue"} cocktailName={"cocktailNameBlue"}/>
            </div>
            <div className="cardGreen">
                <Card  drinks={drinks[1]} color={"ingredientsGreen"} backgroundColor={"cocktailGreen"} skewed={"skewedGreen"} cocktailName={"cocktailNameGreen"}/>
            </div>
            <div className="cardYellow">
                <Card drinks={drinks[2]} color={"ingredientsYellow"} backgroundColor={"cocktailYellow"} skewed={"skewedYellow"} cocktailName={"cocktailNameYellow"}/>
            </div>
        </div>
    );
};

export default Main;