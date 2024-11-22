import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function List() {
  const { store, actions } = useContext(Context);
  const [filteredMascotas, setFilteredMascotas] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const favoritesParam = new URLSearchParams(location.search).get("favorites");

  useEffect(() => {
    if (store.mascotas.length === 0) {
      actions.loadMascotas();
    }
  }, [actions, store.mascotas]);

  useEffect(() => {
    const filterMascotas = (mascotas, query, favorites) => {
      if (favorites) {
        const favoriteIds = favorites.split(",").map(Number);
        return mascotas.filter((mascota) => favoriteIds.includes(mascota.id));
      }

      if (query) {
        return mascotas.filter((mascota) =>
          [
            "nombre",
            "tipo",
            "estado",
            "edad",
            "genero",
            "region",
            "comuna",
          ].some((key) =>
            mascota[key]?.toString().toLowerCase().includes(query)
          )
        );
      }

      return mascotas;
    };

    setFilteredMascotas(filterMascotas(store.mascotas, query, favoritesParam));
  }, [query, favoritesParam, store.mascotas]);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center bg-light p-4">
        <h1 className="text-secondary">Catálogo de Mascotas</h1>
        <Link to="/home" className="btn btn-success my-2">
          <i className="fa-solid fa-house"></i> Volver al Home
        </Link>
        <Link to="/list" className="btn btn-success">
          <i className="fa-solid fa-book-open"></i> Ir al Catálogo de Mascotas
        </Link>
      </div>
      <div className="row gap-2">
        {filteredMascotas?.length > 0 ? (
          filteredMascotas.map((mascota) => (
            <Card key={mascota.id} mascota={mascota} />
          ))
        ) : (
          <p className="text-center text-secondary">
            No se encontraron resultados.
          </p>
        )}
      </div>
    </>
  );
}

export default List;
