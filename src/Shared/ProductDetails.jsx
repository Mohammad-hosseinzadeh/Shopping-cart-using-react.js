import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import axios from "axios";



export default function ProductDetails(props) {
    const params = useParams()
    const id = params.id;
    const [details, setDetails] = useState([]);
    const {image,title,description,price,category}=details
    useEffect(() => {
        const fechDetails = async () => {
            const Details = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(Details.data)
            return setDetails(Details.data)
            
        };
      fechDetails();
    }, [id]);
    return (
      <>
        <div className={styles.container}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>
                    <span>Category:</span> {category}
                </p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
        </>
    );
}
