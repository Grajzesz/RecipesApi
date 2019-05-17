import React, { Component } from 'react';
import './index.css';
import Form from './Form';
import Result from './Result';

const ApiKey = '67d51b152c762ab5dd5a32213b7fd4dd';
class App extends Component {
    state = {
        more: '',
        value: '',
        images: '',
        labels: '',
        from: 0,
        to: 20
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
            if (counter === 19) {
                counter = -1;
            }
            return (counter += 1);
        }

        // let from = 0;
        // let to = 20;
        const Api = `https://api.edamam.com/search?q=${
            this.state.value
        }&app_id=f7495c5e&app_key=${ApiKey}&from=${this.state.from}&to=${
            this.state.to
        }`;
        // console.log(from);

        fetch(Api)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error('lipa');
            })

            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data.more) {
                    return data;
                }
                this.setState(prevState => ({
                    more: data.more,
                    // from: this.state.from + 20, to: this.state.to + 20,
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
                    ingredients: [
                        {
                            ingredients0:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients1:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients2:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients3:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients4:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients5:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients6:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients7:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients8:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients9:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients10:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients11:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients12:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients13:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients14:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients15:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients16:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients17:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients18:
                                data.hits[add()].recipe.ingredientLines,
                            ingredients19:
                                data.hits[add()].recipe.ingredientLines
                        }
                    ]
                }));
                console.log(this.state.images);
                console.log(this.state.labels);
            });
        // .catch(
        //     err => console.log(err),
        //     this.setState(prevState => ({
        //         err: true,
        //         value: prevState.value
        //     }))
        // );
        // from += 20;
        // to += 20;
        // console.log(from);
        // console.log(to);
    };
    handleNextpage = e => {
        e.persist();
        this.setState(
            { from: this.state.from + 20, to: this.state.to + 20 },
            () => {
                this.handleCitySubmit(e);
                console.log('is', this.state.from);
            }
        );
        // this.handleCitySubmit(e);
        console.log('====================================');
        console.log(this.state.from);
        console.log(this.state.to);
        console.log('====================================');
        // this.handleCitySubmit = this.handleCitySubmit.bind(this);
        // this.handleTextChange = this.handleTextChange.bind(this);
        // this.handleTextChange(e);

        console.log(this.data);
    };
    handlePreviouspage = e => {
        e.persist();
        this.setState(
            { from: this.state.from - 20, to: this.state.to - 20 },
            () => {
                this.handleCitySubmit(e);
                console.log('is', this.state.from);
            }
        );
        // this.handleCitySubmit(e);
        console.log('====================================');
        console.log(this.state.from);
        console.log(this.state.to);
        console.log('====================================');
        // this.handleCitySubmit = this.handleCitySubmit.bind(this);
        // this.handleTextChange = this.handleTextChange.bind(this);
        // this.handleTextChange(e);
        this.handleCitySubmit(e);
        console.log(this.data);
    };
    render() {
        return (
            <div>
                <Form
                    value={this.state.value}
                    change={this.handleTextChange}
                    submit={this.handleCitySubmit}
                />
                <Result
                    recipe={this.state}
                    nextPage={this.handleNextpage}
                    prevPage={this.handlePreviouspage}
                />
            </div>
        );
    }
}

export default App;
