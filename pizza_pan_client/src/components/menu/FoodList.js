import React from 'react'
import FoodDetail from './FoodDetail';


const FoodList = ( {foods, addToFoodCount, subtractFromFoodCount} ) => {

    if (foods.length === 0){
        return (<p>Loading food...</p>)
    }

    const foodsData = foods.map((food, index) => {

        return (
            <>
            
            <ul>
                <FoodDetail 
                food = {food}
                // addToFoodCount = {addToFoodCount}
                // subtractFromFoodCount = {subtractFromFoodCount}
                />
            </ul>
            </>
        )
    })

    return (
        <>
        <h2>Food</h2>
        <ul className="component-list">
            {foods}
        </ul>

        </>
    )



}

export default FoodList
