import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Details() {
const [mascota, setMascota] = useState({});
const {id}= useParams()
// console.log('este es useParams', useParams())

useEffect(() => {
    fetch(`https://huachitos.cl/api/animal/${id}`)
        .then((respuesta) => {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                throw new Error("Hubo un error");
            }
        })
        .then((result) => {
            setMascota(result.data);
            // console.log(result)
        })
        .catch((error) => console.log(error));
},[]);

    return (
        <>
            <h1>Detalles</h1>
            <h3>{mascota.nombre}</h3>
            <h6>{mascota.tipo}{mascota.color}</h6>
            <p>{mascota.edad}</p>
        </>
    );
}

export default Details;