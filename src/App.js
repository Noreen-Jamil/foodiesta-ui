import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { routes } from "./components/routes/routes";

import Welcome from "./welcome/welcome";
import ListOfRecipes from "./listOfRecipes/ListOfRecipes";
import RecipeDetails from "./recipeDetails/recipeDetail";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export default function App() {
  const [selectedRecipe, updateRecipeSelection] = useState("");
  const showSelectedItemDetail = (recipe) => {
    updateRecipeSelection(recipe);
  };

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/listOfRecipes">
        <ListOfRecipes onSelectItem={showSelectedItemDetail} />
      </Route>
      <Route path="/recipeDetail">
        <RecipeDetails recipeId={selectedRecipe} />
      </Route>
      <Footer />
      {/* <BrowserRouter>{routes}</BrowserRouter> */}
    </BrowserRouter>
  );
}
