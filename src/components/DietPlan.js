import React from "react";
import DietData from "../dietplan.json";

function DietPlan(props) {
  return (
    <div>
      <div className="container dietDiv">
        <h1 className="dietTitle">Daily Meal Plan</h1>

        {DietData.map((meal) => {
          return (
            <div key={meal.id} className="mealContainer">
              <h1>{meal.type}</h1>
              <h4>{meal.name}</h4>
              <h5>Ingredients</h5>
              {meal.ingredients.map((ingr) => {
                return (
                  <>
                    <p>{ingr}</p>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DietPlan;
