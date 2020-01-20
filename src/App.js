//Main Container Component (ROOT COMPONENT)

import React, { Component } from 'react'; //adding react to the 
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import flickrAPIKey from './Config.js';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

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
      homePics: [],
      legoPics: [],
      playmobilPics: [],
      knexPics: [],
      searchPics: [],
      loading: true
    };
  } 

  //searches for dachshunds when inside react's component DidMount lifecycle method
  componentDidMount(){ //displays the gifs from the api when page loads 
    this.homeSearch();//specific query can be entered here for the home page
    this.legoSearch();
    this.playmobilSearch();
    this.knexSearch();
  }

  //QUERY pictures - sets up data fetching for user input query
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)//replace dachsund with ${query} once query is defined in search form
    .then(response => { //add the response data to component state
      this.setState({ 
        searchPics: response.data.photos.photo,
        //.data is an object included in an axios response that contains a axios-json-parsed response that was provided by the server
        //.photos.photo is to access the flickr api's array(.photos) of photo objects(.photo)
        loading: false
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    console.log("performSearch() query: ", query);
    console.log("performSearch function RAN");
    console.log("performSearch function data: ", this.state.searchPics);

  }

  //HOME/DACHSHUND pictures data fetching
  homeSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=dachshund&safe_search=1&per_page=24&format=json&nojsoncallback=1`)//replace dachsund with ${query} once query is defined in search form
    .then(response => { //add the response data to component state
      this.setState({ 
        homePics: response.data.photos.photo,
        //.data is an object included in an axios response that contains a axios-json-parsed response that was provided by the server
        //.photos.photo is to access the flickr api's array(.photos) of photo objects(.photo)
        loading: false
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    }); 
  }

   //LEGO pictures data fetching
   legoSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=lego&safe_search=1&per_page=24&format=json&nojsoncallback=1`)//replace dachsund with ${query} once query is defined in search form
    .then(response => { //add the response data to component state
      this.setState({ 
        legoPics: response.data.photos.photo,
        //.data is an object included in an axios response that contains a axios-json-parsed response that was provided by the server
        //.photos.photo is to access the flickr api's array(.photos) of photo objects(.photo)
        loading: false
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    }); 
  }

  //PLAYMOBIL pictures data fetching
  playmobilSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=playmobil&safe_search=1&per_page=24&format=json&nojsoncallback=1`)//replace dachsund with ${query} once query is defined in search form
    .then(response => { //add the response data to component state
      this.setState({ 
        playmobilPics: response.data.photos.photo,
        //.data is an object included in an axios response that contains a axios-json-parsed response that was provided by the server
        //.photos.photo is to access the flickr api's array(.photos) of photo objects(.photo)
        loading: false
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    }); 
  }

  //K'NEX pictures data fetching
  knexSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=knex&safe_search=1&per_page=24&format=json&nojsoncallback=1`)//replace dachsund with ${query} once query is defined in search form
    .then(response => { //add the response data to component state
      this.setState({ 
        knexPics: response.data.photos.photo,
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
    console.log("home/dachshund Data: ", this.state.homePics);
    console.log("lego data: ", this.state.legoPics);
    console.log("search data: ", this.state.searchPics);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} /> {/*passes the search function to SearchForm and calls in whenever onSearch is used in SearchForm*/} 
          <Nav />
          <Switch>
            {/* <Route exact path="/" component={PhotoList}
              // {
              //   (this.state.loading)
              //   ? <p>Images Loading...</p>
              //   : <PhotoList searchResults={this.state.homePics} />   
              // } 

            /> */}
            <Route exact path="/"
              render={ () => <PhotoList searchResults={this.state.homePics} /> } />
            <Route path="/lego"
              render={ () => <PhotoList searchResults={this.state.legoPics} /> } />
            <Route path="/playmobil" 
              render={ () => <PhotoList searchResults={this.state.playmobilPics} /> } />
            <Route path="/knex" 
              render={ () => <PhotoList searchResults={this.state.knexPics} /> } />
            <Route exact path="/search"
              render={ () => <PhotoList searchResults={this.state.searchPics} /> } />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

{/* <Route exact path={match.path} 
                 render={ () => <Redirect to={`${match.path}/html`} /> } /> */}