import {React, useEffect} from 'react'
import { connect }from 'react-redux'
import { getVideogameDetail } from '../../actions/actions'
import Navbar from '../NavBar2/NavBar'
import photo from '../../img/creada.jpg'
import { NavLink } from 'react-router-dom'
import './gamedetail.css'

function GameDetails(props) {

    const {getVideogameDetail, gameDetails} = props
    const {idVideogame} = props.match.params;

    // me carga los details del juego
    useEffect(() => {
    getVideogameDetail(idVideogame);
    },[idVideogame])

    return (
      <div className="container-detail">
        <Navbar />
        <div className="details-div">
          {gameDetails ? (
            <div>
              {gameDetails.background_image ? (
                <div className="div-img">
                  <img src={gameDetails.background_image} alt="Videogame"></img>
                </div>
              ) : (
                <div className="div-img">
                  <img src={photo} alt="Videogame"></img>
                </div>
              )}
              
              {gameDetails.description &&
              gameDetails.genres &&
              gameDetails.platforms ? (
                <div className="div-descr">
                  <h3 className="title">{gameDetails.name}</h3>
                  {
                <p>
                  <strong className='span'>Fecha de lanzamiento:</strong>{" "}
                  {`${gameDetails.releaseDate || "None"}`}
                </p>
              }
              <p>
                <strong className='span'>Rating:</strong> {`${gameDetails.rating}`}
              </p>
                  {
                    <p className="descripcion">
                      {gameDetails.description.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                  }
                  {
                    <p>
                      <strong className='span'>Géneros:</strong>{" "}
                      {`${gameDetails.genres.join(", ")}`}
                    </p>
                  }
                  {
                    <p>
                      <strong className='span'>Plataformas:</strong>{" "}
                      {`${
                        typeof gameDetails.platforms === "string"
                          ? gameDetails.platforms
                          : gameDetails.platforms.join(", ")
                      }`}
                    </p>
                  }
                  <NavLink to="/videogames">
                    <button>Volver</button>
                  </NavLink>
                </div>
              ) : (
                <h1>Cargando</h1>
              )}
            </div>
          ) : (
            <h1>Cargando</h1>
          )}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        gameDetails: state.gameDetails
    }
}

export default connect(mapStateToProps, {getVideogameDetail}) (GameDetails)
