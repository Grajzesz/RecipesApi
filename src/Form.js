import React from 'react';

const Form = props => {
    // let valiue = document.querySelector("value")
    // let po = valiue.toUpperCase()
    return (
        <div className="formularz">
            <form className="forms" onSubmit={props.submit}>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.change}
                    placeholder={'Ingredients You got'}
                />

                <button>Search Ingredients</button>
            </form>
        </div>
    );
};
export default Form;
