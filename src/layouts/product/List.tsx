import React, { useEffect, useState } from "react";
import ProductProperties from "./components/ProductProperties";
import type { Product } from "../../models/Product";
import { getAllProduct } from "../api/ProductApi";

const List: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Gọi API
        getAllProduct()
            .then((products) => {
                setProducts(products);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Lỗi tải dữ liệu");
                setLoading(false);
            });
    }, []); // chỉ gọi 1 lần khi component mount

    if (loading) {
        return <div className="text-center mt-5">Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div className="text-danger text-center mt-5">Lỗi: {error}</div>;
    }
    return (
        <div className="container my-4">
            <h2 className="text-center mb-4 fw-bold">🛍️ Danh sách sản phẩm</h2>

            {/* ✅ Bọc toàn bộ danh sách trong 1 row */}
            <div className="row g-4">
                {products.map((product) => (
                    <ProductProperties key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default List;
