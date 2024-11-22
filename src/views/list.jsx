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

  useEffect(() => {
    if (store.mascotas.length === 0) {
      actions.loadMascotas();
    }
  }, [actions, store.mascotas]);

  useEffect(() => {
    const filterMascotas = (mascotas, query) => {
      if (!query) {
        return mascotas;
      }
      return mascotas.filter((mascota) =>
        ["nombre", "tipo", "estado", "edad", "genero", "region", "comuna"].some(
          (key) => mascota[key]?.toString().toLowerCase().includes(query)
        )
      );
    };

    setFilteredMascotas(filterMascotas(store.mascotas, query));
  }, [query, store.mascotas]);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center bg-light p-4">
        <h1 className="text-secondary">Catálogo de Mascotas</h1>
        <Link to="/home" className="btn btn-success">
          Volver al Home
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
