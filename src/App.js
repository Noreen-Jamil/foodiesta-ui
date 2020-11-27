import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import Welcome from "./components/welcome/welcome";
import ListOfRecipes from "./components/listOfRecipes/ListOfRecipes";
import RecipeDetails from "./components/recipeDetails/recipeDetails";

export default function App() {
  const [headerDisplay, setHeaderDisplay] = useState("false");
  const headerState = (state) => {
    setHeaderDisplay(state);
  };

  const [selectedRecipe, updateRecipeSelection] = useState("");
  const [selectedNutritions, updateNutritions] = useState("");
  const showSelectedItemDetail = (recipe, nutritions) => {
    updateRecipeSelection(recipe);
    updateNutritions(nutritions);
  };
  
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact>
          <Welcome headerState={headerState} />
        </Route>
        {headerDisplay === "false" ? null : <Header />}
        <Route path="/listOfRecipes">
          <ListOfRecipes
            headerState={headerState}
            onSelectItem={showSelectedItemDetail}
          />
        </Route>
        <Route path="/recipeDetails">
          <RecipeDetails
            headerState={headerState}
            recipe={selectedRecipe}
            nutritions={selectedNutritions}
          />
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
