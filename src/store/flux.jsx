const getState = ({ getStore, setStore }) => {
  return {
    store: {
      favoritos: [],
      mascotas: [],
    },
    actions: {
      loadMascotas: () => {
        fetch("https://huachitos.cl/api/animales")
          .then((response) => response.json())
          .then((data) => {
            setStore({ mascotas: data.data });
          })
          .catch((error) => console.error("Error cargando mascotas:", error));
      },
      addFavorites: (favorito) => {
        const { favoritos } = getStore();
        if (!favoritos.some((fav) => fav.id === favorito.id)) {
          setStore({ favoritos: [...favoritos, favorito] });
        }
      },
      removeFavorites: (mascota) => {
        const { favoritos } = getStore();
        const nuevosFavoritos = favoritos.filter(
          (favorito) => favorito.id !== mascota.id
        );
        setStore({ favoritos: nuevosFavoritos });
      },
    },
  };
};

export default getState;
