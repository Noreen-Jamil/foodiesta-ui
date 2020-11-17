import React from "react";
import "./recipeDetail.css";

const RecipeDetails = (props) => {
  return (
    <div className="detail-recipe-list">
      <div className="">
        <h5 className=" recipe-title">Pasta</h5>
      </div>
      <div className=" main-recipe-container">
        <div className="dish-detail-container">
          <div>
            <h3>Ready In Minutes : </h3>
            <span> 20</span>
          </div>
          <div>
            <h3> Servings :</h3>
            <span> 20 </span>
          </div>
          <div>
            <h3> Health Score :</h3>
            <span> 40 </span>
          </div>
          <div>
            <h3> Diets :</h3>
            <span>vegetarion, ovo</span>
          </div>
          <div id="ingredients-list-container">
            <h3> Ingredients :</h3>
            <ul id="ingredients-ul">
              <li>
                <span>oil</span>
                <span>4</span>
                <span>tbs</span>
              </li>
              <li>
                <span>oil</span>
                <span>4</span>
                <span>tbs</span>
              </li>
              <li>
                <span>oil</span>
                <span>4</span>
                <span>tbs</span>
              </li>
            </ul>
          </div>
          <div>
            <h3> Instructions:</h3>
            <span>
              here will come instructions abiut reciep here will come
              instructions abiut reciephere will come instructions abiut
              reciephere will come instructions abiut reciephere will come
              instructions abiut reciephere will come instructions abiut
              reciephere will come instructions abiut reciephere will come
              instructions abiut reciephere will come instructions abiut reciep
              here will come instructions abiut reciephere will come
              instructions abiut reciep here will come instructions abiut
              reciephere will come instructions abiut reciephere will come
              instructions abiut reciephere will come instructions abiut reciep
              here will come instructions abiut reciephere will come
              instructions abiut reciephere will come instructions abiut
              reciephere will come instructions abiut reciep here will come
              instructions abiut reciephere will come instructions abiut
              reciephere will come instructions abiut reciep
            </span>
          </div>
        </div>
      </div>
      <img
        className="image-recipe"
        src="https://i.pinimg.com/originals/11/b5/4e/11b54e28f3014e11e4726b62d8a8333e.jpg"
        alt="pasta"
      />
    </div>
  );
};

export default RecipeDetails;
