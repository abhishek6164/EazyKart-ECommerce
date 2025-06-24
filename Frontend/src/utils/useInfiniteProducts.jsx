import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
// import s{ loadlazyproduct } from "../store/actions/productActions"; // ✅
import { loadlazyproduct } from "../store/reducers/productSlice";

const useInfiniteProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products); // ✅
    const [hasMore, setHasMore] = useState(true);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:3000/products?_limit=6&_start=${products.length}`
            );
            console.log("Fetched data:", data);

            let newProducts = [];
            if (Array.isArray(data)) {
                newProducts = data;
            } else if (data?.products && Array.isArray(data.products)) {
                newProducts = data.products;
            } else {
                console.error("❌ Unexpected data structure:", data);
                setHasMore(false);
                return;
            }

            // ✅ Use correct payload while dispatching
            dispatch(loadlazyproduct(newProducts));

            if (newProducts.length < 6) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setHasMore(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return { products, hasMore, fetchProducts };
}

export default useInfiniteProducts
