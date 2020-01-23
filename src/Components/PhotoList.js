//stateless photo data container component
import React from 'react';
import Photo from './Photo';
import NoPhoto from './NoPhoto';

const PhotoList = props => { 
  //let params.userSearchQuery = props.title;
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


