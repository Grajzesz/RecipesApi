import React from 'react';



const Recipe = (props) => {
    const {

        image0,
        image1,
        image2,
        image3,


    } = props.recipe;
    return (
        <div className="recipe" recipe={props.recipes}>
            <img src={image0} alt="djis" />
            <img src={image1} alt="djis" />
            <img src={image2} alt="djis" />
            <img src={image3} alt="djis" />
        </div>
    );
};
export default Recipe;
