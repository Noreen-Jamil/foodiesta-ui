import React, { useState, useEffect } from "react";
import { getRecipies, getNutririons } from "../../apiService";
import { Link } from "react-router-dom";
import "./listOfRecipes.css";

const ListOfRecipes = (props) => {
  const allRecipiesIds = [
    639779,
    644681
    // 640941,
    // 641904,
    // 664473
    // 639057,
    // 653836,
    // 657384,
    // 715497,
    // 647442,
    // 632552,
    // 640844,
    // 642287
    // 632570,
    // 1098387,
    // 631880,
    // 665012,
    // 657178,
    // 640767,
    // 982365,
    // 631756,
    // 652284,
    // 652332
    //new
    // 637932,
    // 638568,
    // 644094,
    // 638832,
    // 639303,
    // 716211,
    // 663985,
    // 658517,
    // 716426,
    // 649504,
    // 633293,
    // 633251,
    // 632101,
    // 716411,
    // 651958
    //checked
    // 650939,
    // 665779,
    // 654663,
    // 632502,
    // 644693,
    // 636328,
    // 634703,
    // 794351,
    // 655098,
    // 638940,
    // 640827,
    // 639594,
    // 636271,
    // 652513,
    // 633786,
    // 716437,
    // 660297,
    // 716367,
    // 632250,
    // 651409,
    // 646906
    // 715378,
    // 715419,
    // 664488,
    // 715407,
    // 655098,
    // 646906,
    // 797177,
    // 716377,
    // 665303,
    // 636601,
    // 637832,
    // 715421,
    // 659929,
    // 1098393
    // 715394,
    // 716370,
    // 645479,
    // 633221,
    // 715385,
    // 654032,
    // 716429,
    // 633258,
    // 633251,
    // 647501,
    // 652433,
    // 716430
    // 648348,
    // 639616,
    // 631807,
    // 643362,
    // 640621,
    // 634496,
    // 645696,
    // 646868,
    // 645978
  ];
  let getRecipe = [];
  // let allNutritions = [];
  const [recipies, updateRecipies] = useState([]);
  // const [nutritions, updateNutritions] = useState([]);
  // useEffect(() => {
  //   allRecipiesIds.forEach((id) => {
  //     let data = getRecipies(id);
  //     console.log(data);
  //     let recipeInfo = {
  //       id: data.id,
  //       title: data.title,
  //       instructions: data.instructions,
  //       image: data.image,
  //       readyInMinutes: data.readyInMinutes,
  //       servings: data.servings,
  //       healthScore: data.healthScore,
  //       diets: data.diets,
  //       ingredients: data.extendedIngredients,
  //       dishType: data.dishTypes
  //     };
  //     getRecipe.push(recipeInfo);
  //     updateRecipies([...getRecipe]);

  //     // getNutritions(id).then((data) => {
  //     //   let nutritions = {
  //     //     data,
  //     //     id
  //     //   };
  //     //   allNutritions.push(nutritions);
  //     //   updateNutritions([...allNutritions]);
  //     //   console.log(id);
  //     //   console.log(data);
  //     // });
  //   });

  //   // recipies.forEach((recipe, index) => {
  //   //   recipe.id === nutritions.id
  //   //     ? (recipe.nutritions = nutritions[index].data)
  //   //     : console(recipe.id + " " + nutritions[index].id);
  //   // });
  //   updateRecipies(recipies);
  // }, []);

  return (
    <div className="list-group">
      <h1 id="list-title">Recipies</h1>
      <ul id="list-container">
        <li className="recipe-list">
          <Link to="/detailOfRecipe">
            <div className="main-info">
              <h5 className="recipe-name">Pasta</h5>
              <small className="recipe-id">23456</small>
            </div>
            <div className="detail-container">
              <img
                className="pic-of-dish"
                src="https://i.pinimg.com/originals/11/b5/4e/11b54e28f3014e11e4726b62d8a8333e.jpg"
                alt="pasta"
              />
              <div className="dish-details">
                <span> Ready In Minutes : 2 </span>
                <span> Servings : 10 </span>
                <span> Health Score : 20 </span>
              </div>
              <div className="dish-details">
                <span> calories : 340 </span>
                <span> carbs : 10 </span>
                <span> Proteins : 20 </span>
                <span> Fats : 20 </span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
    // <div className="list-group">
    //   <h1 id="list-title">Recipies</h1>
    //   <ul id="list-container">
    //     {recipies.map((recipe, index) => {
    //       return (
    //         <li
    //           key={index}
    //           onClick={() => {
    //             props.onSelectItem(recipies[index]);
    //           }}
    //           className="list-group-item list-group-item-action recipe-list"
    //         >
    //           <Link to="/detailOfRecipe">
    //             <div className="d-flex w-100 justify-content-between">
    //               <h5 className="mb-1 recipe-name">{recipe.title}</h5>
    //               <small className="text-muted">{recipe.id}</small>
    //             </div>
    //             <div className="mb-1 detail-container">
    //               <img
    //                 className="pic-of-dish"
    //                 src={recipe.image}
    //                 alt={recipe.title}
    //               />
    //               <div className="dish-details">
    //                 <span> Ready In Minutes : {recipe.readyInMinutes} </span>
    //                 <span> Servings : {recipe.servings} </span>
    //                 <span> Health Score : {recipe.healthScore} </span>
    //               </div>
    //             </div>
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
};

export default ListOfRecipes;
