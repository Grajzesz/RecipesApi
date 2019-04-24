import React from 'react';


const Result = props => {
    const {
        err,
        image0,
        image1,
        image2,
        image3,

    } = props.recipe;





console.log(image0);





    let content = null;
    if (!err) {

        content = (
            <div className="content">
            <img src={image0} alt="djis" />
            <img src={image1} alt="djis" />
            <img src={image2} alt="djis" />
            <img src={image3} alt="djis" />
            </div>
        );
    }
    return (
        <div className="result">
            {content}
        </div>
    );
};
export default Result;
