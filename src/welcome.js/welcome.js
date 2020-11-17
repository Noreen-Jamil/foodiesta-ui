import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="App">
      <div className="card_body">
        <h2 className="welcome-description intro-heading">
          Welcome To Foodiesta
        </h2>
        <h5 className="welcome-description ">
          Home of Recipies. Foodiesta contains recipies from alot of categories
          and gives your food taste of perfection.
        </h5>
        <p className="card_text">
          Foodiesta cares for your health thats why we share{" "}
          <strong>health score</strong> of each recipe with you so you can
          better take care of you and your family health. Foodiesta makes
          selection of recipe easy specially for people who{" "}
          <strong>diets</strong> by providing details of{" "}
          <strong>nutritions</strong> of each recipe. You can find{" "}
          <strong>calories, protein, carbs and fats</strong> which makes easy
          for you to select perfect recipe for your health. You can{" "}
          <strong>filter</strong> recipes according to calories, protein, fats
          and carbs. You can also <strong>search</strong> your favorite recipes
          by their name.
        </p>

        <Link to="listofRecipes" className="show-recipies-link">
          Show Recipies
        </Link>
      </div>

      <div id="main-images-description-container">
        <h2 id="images-description-holder-title"> Categories</h2>
        <div id="dishes-image-container">
          <div className="image-and-description-container">
            <img
              src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/best_and_worst_indian_dishes_for_your_health_slideshow/1800x1200_best_and_worst_indian_dishes_for_your_health_slideshow.jpg"
              className="categories-img"
              alt="gravy with chicken"
            />
            <div className="card-description">
              <p className="card-image-text">Lunch / Dinner / BreakFast</p>
              <span className="card-image-healthScore">Health Score : 10</span>
            </div>
          </div>

          <div className="image-and-description-container">
            <img
              src="https://i.pinimg.com/originals/11/b5/4e/11b54e28f3014e11e4726b62d8a8333e.jpg"
              className="categories-img"
              alt="green pasta"
            />
            <div className="card-description">
              <p className="card-image-text">Side Dishes / Soups</p>
              <span className="card-image-healthScore">Health Score : 10</span>
            </div>
          </div>

          <div className="image-and-description-container">
            <img
              src="https://i0.wp.com/www.missinthekitchen.com/wp-content/uploads/2019/02/Mint-Chocolate-Chip-Cheesecake-Recipe-Image.jpg?fit=650%2C433&ssl=1"
              className="categories-img"
              alt="ice cream"
            />
            <div className="card-description">
              <p className="card-image-text">Desserts</p>
              <span className="card-image-healthScore">Health Score : 10</span>
            </div>
          </div>

          <div className="image-and-description-container">
            <img
              src="https://cdn.cdnparenting.com/articles/2019/01/192709250-H.jpg"
              className="categories-img"
              alt="juices"
            />
            <div className="card-description">
              <p className="card-image-text">Juices</p>
              <span className="card-image-healthScore">Health Score : 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Welcome);
