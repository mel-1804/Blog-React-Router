import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../App.css";

function Navbar() {
  const { store } = useContext(Context);
  const { favoritos } = store;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/list?q=${encodeURIComponent(search.trim())}`);
    } else {
      alert("Por favor, escribe algo para buscar");
    }
  };

  const handleViewAllFavorites = () => {
    const { favoritos } = store;

    if (favoritos.length > 0) {
      const favoriteIds = favoritos.map((mascota) => mascota.id).join(",");
      navigate(`/list?favorites=${encodeURIComponent(favoriteIds)}`);
    } else {
      alert("Aún no has agregado mascotas a tus favoritos");
    }
  };

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand mx-4">
            Home
          </Link>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Encuentra a tu mascota"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-dark" type="submit">
              Buscar
            </button>
          </form>

          <li className="nav-item dropdown" style={{ listStyleType: "none" }}>
            <a
              className="nav-link dropdown-toggle me-5"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Favoritos
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {favoritos.length === 0 && <span>Vacío</span>}
              {favoritos.map((mascota) => (
                <li key={mascota.id}>
                  <Link className="dropdown-item" to={`/details/${mascota.id}`}>
                    {mascota.nombre}
                  </Link>
                </li>
              ))}
              {favoritos.length > 0 && (
                <li>
                  <button
                    className="dropdown-item text-center text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewAllFavorites();
                    }}
                  >
                    Ver todos mis favoritos
                  </button>
                </li>
              )}
            </ul>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
