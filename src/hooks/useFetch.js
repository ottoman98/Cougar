import { useState, useEffect } from "react";



function get(url, method) {

    const [data, setData] = useState(null);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((e) => setError(e))
            .finally(() => setReady(true));
    }, []);
    return { data };

}

function useFetchPost(url) {


    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [colores, setColores] = useState([]);
    const [tallas, setTallas] = useState([]);
    const [descuento, setDescuento] = useState(0);
    const [imagenes, setImagenes] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('cantidad', cantidad);
        formData.append('precio', precio);
        formData.append('categoria', categoria);
        formData.append('colores', colores);
        formData.append('tallas', tallas);
        formData.append('descuento', descuento);

        for (let i = 0; i < imagenes.length; i++) {
            formData.append('image', imagenes[i]);
        }

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    console.log('Producto guardado con éxito',);
                } else {
                    console.log('Ha ocurrido un error al guardar el producto');
                }
            })
            .catch(error => console.error('Ha ocurrido un error al guardar el producto', error));

    };

    const handleImagenesChange = (event) => {
        const files = event.target.files;
        const imagenesArray = [];

        for (let i = 0; i < files.length; i++) {
            imagenesArray.push(files[i]);
        }

        setImagenes(imagenesArray);
    };

    return { nombre, cantidad, precio, setNombre, setCantidad, setPrecio, setCategoria, setColores, setTallas, setDescuento, handleImagenesChange, handleSubmit };




}


function useFetch(url, method) {
    if (method == 'GET' || method == undefined) {
        return get(url);
    }
    if (method == 'POST') {
        return useFetchPost(url);

    }



}
export default useFetch;
