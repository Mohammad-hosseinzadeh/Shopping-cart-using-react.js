import React, { useState, useEffect } from "react";
// API
import { getProducts } from "../services/api";

export default function ProductContextProvider() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        };
        fetchAPI();
    }, []);
    return <div></div>;
}
