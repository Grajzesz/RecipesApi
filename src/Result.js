import React from 'react';

const Result = props => {
    const { more, images, labels, ingredients, value } = props.recipe;

    console.log(props.recipe.more);
    let content = null;
    if (more === true && value) {
        content = (
            <div className="content">
                <div className="food__container">
                    <img src={images[0].image0} alt="djis" />
                    <h3>{labels[0].label0}</h3>
                    <p>{ingredients[0].ingredients0.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image1} alt="djis" />
                    <h3>{labels[0].label1}</h3>
                    <p>{ingredients[0].ingredients1.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image2} alt="djis" />
                    <h3>{labels[0].label2}</h3>
                    <p>{ingredients[0].ingredients2.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image3} alt="djis" />
                    <h3>{labels[0].label3}</h3>
                    <p>{ingredients[0].ingredients3.join(', \r\n')}</p>
                    <a href="https://www.google.pl/">
                        <div className="link">Let's see</div>
                    </a>
                </div>
                <div className="food__container">
                    <img src={images[0].image4} alt="djis" />
                    <h3>{labels[0].label4}</h3>
                    <p>{ingredients[0].ingredients4.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image5} alt="djis" />
                    <h3>{labels[0].label5}</h3>
                    <p>{ingredients[0].ingredients5.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image6} alt="djis" />
                    <h3>{labels[0].label6}</h3>
                    <p>{ingredients[0].ingredients6.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image7} alt="djis" />
                    <h3>{labels[0].label7}</h3>
                    <p>{ingredients[0].ingredients7.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image8} alt="djis" />
                    <h3>{labels[0].label8}</h3>
                    <p>{ingredients[0].ingredients8.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image9} alt="djis" />
                    <h3>{labels[0].label9}</h3>
                    <p>{ingredients[0].ingredients9.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image10} alt="djis" />
                    <h3>{labels[0].label10}</h3>
                    <p>{ingredients[0].ingredients10.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image11} alt="djis" />
                    <h3>{labels[0].label11}</h3>
                    <p>{ingredients[0].ingredients11.join(', \r\n ')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image12} alt="djis" />
                    <h3>{labels[0].label12}</h3>
                    <p>{ingredients[0].ingredients12.join(', \r\n')}</p>
                </div>

                <div className="food__container">
                    <img src={images[0].image13} alt="djis" />
                    <h3>{labels[0].label13}</h3>
                    <p>{ingredients[0].ingredients13.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image14} alt="djis" />
                    <h3>{labels[0].label14}</h3>
                    <p>{ingredients[0].ingredients14.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image15} alt="djis" />
                    <h3>{labels[0].label15}</h3>
                    <p>{ingredients[0].ingredients15.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image16} alt="djis" />
                    <h3>{labels[0].label16}</h3>
                    <p>{ingredients[0].ingredients16.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image17} alt="djis" />
                    <h3>{labels[0].label17}</h3>
                    <p>{ingredients[0].ingredients17.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image18} alt="djis" />
                    <h3>{labels[0].label18}</h3>
                    <p>{ingredients[0].ingredients18.join(', \r\n')}</p>
                </div>
                <div className="food__container">
                    <img src={images[0].image19} alt="djis" />
                    <h3>{labels[0].label19}</h3>
                    <p>{ingredients[0].ingredients19.join(', \r\n')}</p>
                </div>
                <button onClick={props.prevPage}>prev</button>
                <button onClick={props.nextPage}>next</button>
            </div>
        );
    }

    return (
        <div className="result">
            {more === false ? `Nie mamy w bazie ${value}` : content}
        </div>
    );
};
export default Result;
