import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();  // Get the product ID from the URL params

    return (
        <div>
            <h1>Product Page</h1>
            <p>Displaying details for product ID: {id}</p>
        </div>
    );
}

export default ProductPage;
