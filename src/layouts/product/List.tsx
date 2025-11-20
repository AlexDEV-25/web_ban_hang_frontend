import React, { useEffect, useState } from "react";
import ProductProperties from "./components/ProductProperties";
import type { Product } from "../../models/Product";
import { getProductPage, getTotalPage } from "../api/ProductApi";
import Pagination from "../utils/Pagination";

const List: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pageNow, setPageNow] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getTotalPage().then((data) => {
            setTotalPage(data);
        });
    }, []);

    useEffect(() => {
        setLoading(true);
        getProductPage(pageNow - 1, 6) // page index từ 0, mỗi trang 6 sản phẩm
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Lỗi tải dữ liệu");
                setLoading(false);
            });
    }, [pageNow]);

    const changePage = (page: number) => {
        if (page >= 1 && page <= totalPage) {
            setPageNow(page);
        }
    };

    if (loading) return <div className="text-center mt-5">Đang tải dữ liệu...</div>;
    if (error) return <div className="text-danger text-center mt-5">Lỗi: {error}</div>;

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4 fw-bold">🛍️ Danh sách sản phẩm</h2>

            <div className="row g-4">
                {products.map((product) => (
                    <ProductProperties key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-4 d-flex justify-content-center">
                <Pagination pageNow={pageNow} totalPage={totalPage} pagination={{ changePage }} />
            </div>
        </div>
    );
};

export default List;
