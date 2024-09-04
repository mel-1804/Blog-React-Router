import { useParams } from "react-router-dom";

function Details() {
const {id}= useParams()
const productos = [
    {
        id: 1,
        title: "calcetin mujer",
        description: "algodon, estampado floral",
        price: 8990,
    },
    {
        id: 1,
        title: "caja calcetin mujer x3",
        description: "algodon, estampado geometrico",
        price: 24990,
    },
    {
        id: 1,
        title: "calcetin corto mujer",
        description: "bamboo, deportivo",
        price: 5990,
    },
];
const producto = productos.find((producto)=>producto.id === parseInt(id))
    return (
        <>
            <h1>Detalles</h1>
            <h3>{producto.title}</h3>
            <h6>{producto.price}</h6>
            <p>{producto.description}</p>
        </>
    );
}

export default Details;