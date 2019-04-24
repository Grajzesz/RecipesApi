import React, { Component } from 'react';
import './App.css';
import Form from './Form';

const ApiKey = '67d51b152c762ab5dd5a32213b7fd4dd';
class App extends Component {
    state = {
        desc: '',
        value: ''
    };

    handleTextChange = e => {
        this.setState({
            value: e.target.value
        });
    };
    handleCitySubmit = e => {
        e.preventDefault();
        console.log('lala');

        const Api = `https://api.edamam.com/search?q=${
            this.state.value
        }&app_id=f7495c5e&app_key=${ApiKey}&to=20`;

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
            </div>
        );
    }
}

export default App;
