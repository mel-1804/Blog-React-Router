import { Link } from "react-router-dom";
import "../App.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../store/appContext";

function Card({ mascota }) {
  const { store, actions } = useContext(Context);
  const { favoritos } = store;
  const { addFavorites, removeFavorites } = actions;
  const isFavorite = favoritos.some((fav) => fav.id === mascota.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorites(mascota);
    } else {
      addFavorites(mascota);
    }
  };

  return (
    <>
      <div className="card col-4" style={{ width: "18rem" }}>
        <img src={mascota.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="tituloCard d-flex justify-content-between">
            <h5 className="card-title">{mascota.nombre}</h5>
            <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
              {isFavorite ? (
                <i className="fa-solid fa-heart" style={{ color: "black" }}></i>
              ) : (
                <i
                  className="fa-regular fa-heart"
                  style={{ color: "gray" }}
                ></i>
              )}
            </div>
          </div>
          <p className="card-text">
            {mascota.tipo}, {mascota.edad}
          </p>
          <Link to={`/details/${mascota.id}`} className="btn btn-secondary">
            Conocer más sobre {mascota.nombre}
          </Link>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  mascota: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    edad: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
