import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://fakestoreapi.in/api/products");
            setProducts(response.data.products);
        
        } 
        catch (err) {
            setError("Failed to fetch products. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, error, isLoading, refetch: fetchProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
