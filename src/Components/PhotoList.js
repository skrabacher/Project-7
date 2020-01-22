//stateful photo data container component

import React, { Component } from 'react';

import Photo from './Photo';
import NoPhoto from './NoPhoto';

const PhotoList = props => { 
  const results = props.searchResults; //searchResults property passed from app.js (= response.data.photos.photo)
  console.log("PhotoList Results: ", results);
  let photos;
  if (results.length >0) { 
    photos = results.map(photos =>
    <Photo url= {`https://farm${photos.farm}.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id}/> //URL for the Pghoto image we want (basically app.state.photos.photo.images.fixed_heigt.url)
    );
  } else {
    photos = <NoPhoto />
  }

  return(
    <div className="photo-container">
        <h2>Image Results for: {props.title}</h2>
          <ul className="photo-list">
            {photos}
          </ul> 
    </div>
  );
}

export default PhotoList;

//NEED TO CONVERT TO JSX for IF statement
    // <div class="photo-container">
    //         <h2>Results</h2>
    //         <ul>
    //         <li>
    //             <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
    //         </li>
    //         <li>
    //             <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
    //         </li>
    //         <li>
    //             <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
    //         </li>
    //         <li>
    //             <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
    //         </li>
    //         <ul/>
    // <div/>
//NEED TO CONVERT TO JSX for ELSE statement
