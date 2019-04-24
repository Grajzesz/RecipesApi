import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const ApiKey = '67d51b152c762ab5dd5a32213b7fd4dd';
class App extends Component {
    state = {
        desc: '',
        value: '',
        image0: '',
        // image: '',
        // image2: ''
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
  return counter += 1;
}

function image(){
  return this.setState("image"+add()+":")
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
                console.log(data);
                this.setState(prevState => ({
                    err: false,

                    image0: data.hits[add()].recipe.image,
                    // image: this.state.image+add(),
                    image1: data.hits[add()].recipe.image,
                    image2: data.hits[add()].recipe.image,
                    image3: data.hits[add()].recipe.image,
                    city: prevState.value
                }));
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
