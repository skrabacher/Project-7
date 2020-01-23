//stateful component for searching
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';


class SearchForm extends Component {
    //this searchText state is local to the SearchForm component
    state = {
      searchText: '',
      inputText: ''
    }
    
    //onInputChange - updates component state anytime user changes the values in the search input field
    onInputChange = event => {
        console.log('in the onInputChange Function');
        this.setState({ inputText: event.target.value }); //sets the state to the search value inputed by user
        console.log("onInputChange search text: ", event.target.value);
    }

    //handleSubmit - passes user input from the search form up to the perform Search function in app.js
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ searchText: this.state.inputText });
        setTimeout( () => {
        this.props.onSearch(this.state.searchText); //invokes onSearch prop (aka performSearch function from app.js) and uses user input to define query
        }, 0);
        event.currentTarget.reset(); //resets form 
        setTimeout( () => {
            console.log("after: ", this.state);
        }, 0); //even when its at zero milleseconds setTimeout defaults to the back of the call stack and this.setState with be called before set timeout whereas this.setState will get called AFTER console.log()
        


    }
    render() {  
        return (
        <form className="search-form" onSubmit={this.handleSubmit} >
            <input type="search" 
                    onChange={this.onInputChange}
                    name="search" 
                    placeholder="Search" 
                    required />
            <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
            </button>
            { 
                (this.state.searchText.length > 0) 
                ? <Redirect to={`/search/${this.state.searchText}`} />
                : <Route exact path="/" />
            }
        </form>
                );
            }
}

export default SearchForm;
