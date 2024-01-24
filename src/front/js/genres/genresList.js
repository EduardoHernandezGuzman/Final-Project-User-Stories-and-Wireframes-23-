import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Genres_list = () => {

  const { store, actions } = useContext(Context);

  return (
    <>
    
    <div>
      <h2>Genres</h2>

        <div className="contenedorGenres">

          {store.genres.map((item, index) => (
            <div className="cardGenre card-container" >
                <img src="" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.type}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
                  <Link to={"/genresList/" + index}>
                    <button className="btn btn-primary">More</button>
                  </Link>

                  <button className="btn btn-success" onClick={()=>actions.addFavoriteGenre(item.type)}>Like!</button>

                </div>
            </div>))}
        </div>
        
    </div>
    <br/>
    <div>
      <Link to="/">
        <button className="btn btn-primary">Back Home</button>
      </Link>
      <Link to="/formGenres/">
        <button className="btn btn-success">Add Genre</button>
      </Link>
      <Link to="/viewFavGenres/">
        <button className="btn btn-warning">Favorites</button>
      </Link>
    </div>
    </>

  );
};
