import React from "react";
import "../css/RecipeDetailsstyle.css";
import foodPhoto from '../pics/rectangle-392.png'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavBarUser from "./NavBarUser";

const RecipeDetails = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavBarUser/>
        
        <div className="recipeDetails">
        <div className="div">
        <img className="rectangle" alt="Rectangle" src={foodPhoto} />
        <div className="text-wrapper">Food 1 Name</div>
        <Link to="/recipe" className="back">&lt; Back</Link>
        <div className="recipe-list">
        <div className="frame">
        <div className="text-wrapper-2">Encik Tan’s Fav</div>
        <div className="text-wrapper-3">Keto Diet</div>
        <a href="" className="text-wrapper-4">Food 1</a>
        <a href="" className="text-wrapper-4">Food 2</a>
        <a href="" className="text-wrapper-4">Food 3</a>
        <a href="" className="text-wrapper-4">Snack</a>
        </div>
        </div>
        <div className="text-wrapper-5">Ingredients.</div>
        <div className="text-wrapper-6">Steps.</div>
        <div className="flexcontainer">
        <p className="text">
        <span className="span">
        - 2kg (4lb) maris piper potatoes, quartered
        <br />
        </span>
        </p>
        <p className="text">
        <span className="span">
        - 100g (3½oz) unsalted butter
        <br />
        </span>
        </p>
        <p className="text">
        <span className="span">
        - 3 red onions, finely sliced
        <br />
        </span>
        </p>
        <p className="text">
        <span className="span">
        - 3 garlic cloves, chopped
        <br />
        </span>
        </p>
        <p className="text">
        <span className="span">
        - 2 tbsp chopped thyme
        <br />
        </span>
        </p>
        <p className="text">
        <span className="span">- 400g (13oz) Gruyère, grated</span>
        </p>
        </div>
        <div className="flexcontainer-2">
        <p className="text">
        <span className="span">
        1. Preheat the oven to gas 3, 160°c, fan 140°c. Boil the potatoes in salted water for 10-15 minutes, until
        just cooked, then drain well.
        <br />
        </span>
        </p>
        <p className="text">
        <span className="span">
        2. Melt the butter in a frying pan over a medium heat. Fry the onions for 15 minutes, until golden. Add the
        garlic and thyme, reduce the heat and cook for 5 minutes. Add the potatoes and season.
        <br />
        </span>
        </p>
        <p className="text">
        <span className="span">
        3. Spoon the potato mix into a baking dish and scatter over the cheese. Bake in the oven for 15-20 minutes,
        until golden.
        </span>
        </p>
        </div>
        <div className="details-box">
        <div className="box">
        <div className="overlap-group">
        <div className="text-wrapper-7">protein</div>
        <div className="text-wrapper-8">carbs</div>
        <div className="text-wrapper-9">sugar</div>
        <div className="text-wrapper-10">14g</div>
        <div className="text-wrapper-11">14g</div>
        <div className="text-wrapper-12">14g</div>
        </div>
        </div>
        <div className="overlap-wrapper">
        <div className="overlap">
        <div className="text-wrapper-13">saturated fat</div>
        <div className="text-wrapper-14">sodium</div>
        <div className="text-wrapper-15">cholesterol</div>
        <div className="text-wrapper-16">14g</div>
        <div className="text-wrapper-17">14g</div>
        <div className="text-wrapper-18">14g</div>
        </div>
        </div>
        <div className="overlap-wrapper">
        <div className="overlap-2">
        <div className="text-wrapper-13">Fibre</div>
        <div className="text-wrapper-19">total fat</div>
        <div className="text-wrapper-20">natrium</div>
        <div className="text-wrapper-16">14g</div>
        <div className="text-wrapper-17">14g</div>
        <div className="text-wrapper-18">14g</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default RecipeDetails;
