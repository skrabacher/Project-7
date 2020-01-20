//stateful component for searching
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// <Link exact path="/search" />


class SearchForm extends Component {
    //this searchText state is local to the SearchForm component
    state = {
      searchText: ''
    }
    
    //onInputChange - updates component state anytime user changes the values in the search input field
    onInputChange = event => {
        console.log('in the onInputChange Function');
        this.setState({ searchText: event.target.value }); //sets the state to the search value inputed by user
        console.log("onInputChange search text: ", event.target.value);
    }

    //handleSubmit - passes user input from the search form up to the perform Search function in app.js
    handleSubmit = event => {
        event.preventDefault();
        console.log('in the handleSubmit Function');
        this.props.onSearch(this.state.searchText); //invokes onSearch prop (aka performSearch function from app.js) and uses user input to define query
        console.log("handleSubmit search text: ", this.state.searchText);
        event.currentTarget.reset(); //resets form 

        //  <Route exact path="/search" />

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
            <NavLink to="/search">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
            </NavLink>
            </button>
        </form>
                );
            }
}

export default SearchForm;



//MODELED AFTER:

        // import React, { Component } from 'react';

        // export default class SearchForm extends Component {
        // //this searchText state is local to the SearchForm component
        // state = {
        //     searchText: ''
        // }
        
        // onSearchChange = e => {
        //     this.setState({ searchText: e.target.value }); //sets the state to the search value inputed by user
        // }
        
        // handleSubmit = e => {
        //     e.preventDefault();
        //     this.props.onSearch(this.state.searchText);//invokes the performSearch function written in app.js that fetches our data with the search QUERY
        //     //this.props.onSearch(this.query.value) to pull the input from the ref tag instead of state
        //     e.currentTarget.reset();
        // }
        
        // render() {  
        //     return (
        //     <form className="search-form" onSubmit={this.handleSubmit} >
        //         <label className="is-hidden" htmlFor="search">Search</label>
        //         <input type="search" 
        //             onChange={this.onSearchChange}
        //             name="search" 
        //             ref={(input) => this.query = input} /*will allow us direct access to this dom element*/
        //             placeholder="Search..." />
        //         <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        //     </form>      
        //     );
        // }
        // }