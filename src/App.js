//Main Container Component

import React, { Component } from 'react'; //adding react to the 
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import flickrAPIKey from './Config.js';

//components
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';

//api key
//console.log('flickrAPIKey: ', flickrAPIKey);

class App extends Component {
  
  constructor() {
    super(); // allows us to use THIS inside the constructor w/in the context of the app class rather than the parent component class that we're extending from react
    this.state = {
      photos: [],
      loading: true
    };
  } 

//searches for dachshunds when inside react's component DidMount lifecycle method
componentDidMount(){ //displays the gifs from the api when page loads 
  this.performSearch('dachshund');//specific query can be entered here
}

//sets up data fetching
performSearch = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)//replace dachsund with ${query} once query is defined in search form
  .then(response => { //add the response data to component state
    this.setState({ 
      photos: response.data.photos.photo,
      //.data is an object included in an axios response that contains a axios-json-parsed response that was provided by the server
      //.photos.photo is to access the flickr api's array(.photos) of photo objects(.photo)
      loading: false
       });
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  }); 

}



  render() {
    console.log("flickr Data: ", this.state.photos );

    return (
      <div className="container">
        <SearchForm onSearch={this.performSearch} /> {/*passes the search function to SearchForm and calls in whenever onSearch is used in SearchForm*/} 
        <Nav />
        <PhotoList searchResults={this.state.photos} />   {/*passes the performSearch results as a prop to PhotoList component*/} 
      </div>
    );
  }
}
export default App; 