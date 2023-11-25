import React from 'react';
import React, { useEffect, useState } from 'react';

function Products(props) {

    const [products, setProducts] = useState({ flag: false, productList: null });

    async function getData() {
        let backend_url = 'http://localhost:3300/product';
        let response = await fetch(backend_url);
        let responseData = await response.json();
        setProducts({ flag: true, productList: responseData['productItems'] });
    }

    useEffect(() => { getData() }, []);

    return (
        <div>Products</div>
    )
}

export default Products;