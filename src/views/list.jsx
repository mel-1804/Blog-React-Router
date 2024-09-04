import Card from '../components/card';
import { Link } from 'react-router-dom';

function List() {
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


    return (
        <>
            <h1>Catalogo-Lista</h1>
            <Link to='/home' className="btn btn-primary">Volver al Home</Link>
            <Link>
                {productos.map((producto) => {
                    return (
                        <Card key={producto.id} producto={producto} />
                    )
                })}
            </Link>
        </>
    );
}

export default List;