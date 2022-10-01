import axios from "axios";


const BASE_URL = "https://fakestoreapi.com";
// get products data 
const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response;
};
export { getProducts };
