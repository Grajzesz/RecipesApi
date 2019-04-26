import React, { Component } from 'react';
import './index.css';
import Form from './Form';
import Result from './Result';

const ApiKey = '67d51b152c762ab5dd5a32213b7fd4dd';
class App extends Component {
    state = {
        err: '',
        value: '',
        images: '',
        labels: ''
    };

    handleTextChange = e => {
        this.setState({
            value: e.target.value
        });
    };
    handleCitySubmit = e => {
        e.preventDefault();
        console.log('lala');
        var counter = -1;
        function add() {
            if(counter === 19){
                counter=-1
            }
            return (counter += 1);
        }
        var counter2 = -1;
        function add2() {
            return (counter2 += 1);
        }

        let n = 20;
        const Api = `https://api.edamam.com/search?q=${
            this.state.value
        }&app_id=f7495c5e&app_key=${ApiKey}&to=${n}`;

        fetch(Api)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error('lipa');
            })
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    err: false,
                    images: [
                        {
                            image0: data.hits[add()].recipe.image,
                            image1: data.hits[add()].recipe.image,
                            image2: data.hits[add()].recipe.image,
                            image3: data.hits[add()].recipe.image,
                            image4: data.hits[add()].recipe.image,
                            image5: data.hits[add()].recipe.image,
                            image6: data.hits[add()].recipe.image,
                            image7: data.hits[add()].recipe.image,
                            image8: data.hits[add()].recipe.image,
                            image9: data.hits[add()].recipe.image,
                            image10: data.hits[add()].recipe.image,
                            image11: data.hits[add()].recipe.image,
                            image12: data.hits[add()].recipe.image,
                            image13: data.hits[add()].recipe.image,
                            image14: data.hits[add()].recipe.image,
                            image15: data.hits[add()].recipe.image,
                            image16: data.hits[add()].recipe.image,
                            image17: data.hits[add()].recipe.image,
                            image18: data.hits[add()].recipe.image,
                            image19: data.hits[add()].recipe.image
                        }
                    ],
                    labels: [
                        {
                            label0: data.hits[add()].recipe.label,
                            label1: data.hits[add()].recipe.label,
                            label2: data.hits[add()].recipe.label,
                            label3: data.hits[add()].recipe.label,
                            label4: data.hits[add()].recipe.label,
                            label5: data.hits[add()].recipe.label,
                            label6: data.hits[add()].recipe.label,
                            label7: data.hits[add()].recipe.label,
                            label8: data.hits[add()].recipe.label,
                            label9: data.hits[add()].recipe.label,
                            label10: data.hits[add()].recipe.label,
                            label11: data.hits[add()].recipe.label,
                            label12: data.hits[add()].recipe.label,
                            label13: data.hits[add()].recipe.label,
                            label14: data.hits[add()].recipe.label,
                            label15: data.hits[add()].recipe.label,
                            label16: data.hits[add()].recipe.label,
                            label17: data.hits[add()].recipe.label,
                            label18: data.hits[add()].recipe.label,
                            label19: data.hits[add()].recipe.label
                        }
                    ],
ingredients:[{
    ingredients0:data.hits[add()].recipe.ingredientLines,
    ingredients1:data.hits[add()].recipe.ingredientLines,
    ingredients2:data.hits[add()].recipe.ingredientLines,
    ingredients3:data.hits[add()].recipe.ingredientLines,
    ingredients4:data.hits[add()].recipe.ingredientLines,
    ingredients5:data.hits[add()].recipe.ingredientLines,
    ingredients6:data.hits[add()].recipe.ingredientLines,
    ingredients7:data.hits[add()].recipe.ingredientLines,
    ingredients8:data.hits[add()].recipe.ingredientLines,
    ingredients9:data.hits[add()].recipe.ingredientLines,
    ingredients10:data.hits[add()].recipe.ingredientLines,
    ingredients11:data.hits[add()].recipe.ingredientLines,
    ingredients12:data.hits[add()].recipe.ingredientLines,
    ingredients13:data.hits[add()].recipe.ingredientLines,
    ingredients14:data.hits[add()].recipe.ingredientLines,
    ingredients15:data.hits[add()].recipe.ingredientLines,
    ingredients16:data.hits[add()].recipe.ingredientLines,
    ingredients17:data.hits[add()].recipe.ingredientLines,
    ingredients18:data.hits[add()].recipe.ingredientLines,
    ingredients19:data.hits[add()].recipe.ingredientLines,
}]
                    // image: prevState.image + 1 + data.hits[add()].recipe.image
                }));
                console.log(this.state.images);
                console.log(this.state.labels);

                // let images = [];

                // for (let i = 0; i <= data.hits.length; i++) {
                //     images.push(data.hits[i].recipe.image);
                //     console.log(images);
                // }
            });
    };

    render() {
        return (
            <div>
                <Form
                    value={this.state.value}
                    change={this.handleTextChange}
                    submit={this.handleCitySubmit}
                />
                <Result recipe={this.state} />
            </div>
        );
    }
}

export default App;
