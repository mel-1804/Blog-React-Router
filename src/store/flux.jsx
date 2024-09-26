const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            favoritos:[]
        },
        actions: {
            addFavorites: (favorito)=>{
                const{favoritos} = getStore()
                setStore({favoritos: [...favoritos, favorito]}) 
            },
            removeFavorites: (mascota)=>{
                const{favoritos} = getStore()
                const nuevosFavoritos = favoritos.filter((favorito)=>favorito!=mascota)
                setStore({favoritos: nuevosFavoritos})
            }
        }
    }
}

export default getState