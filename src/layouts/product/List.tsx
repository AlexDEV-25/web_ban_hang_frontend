import React, { useEffect, useState, useContext } from "react";
import ProductProperties from "./components/ProductProperties";
import type { Product } from "../../models/Product";
import { getProductPage, getTotalPage, findProductByName, getProductByCategory } from "../api/ProductApi";
import Pagination from "../utils/Pagination";
import { AppContext } from "./../../AppContext"

const List: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pageNow, setPageNow] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const ctx = useContext(AppContext);
    if (!ctx) return null;

    const { keyWords, categoryId } = ctx;

    useEffect(() => {
        getTotalPage().then((data) => {
            setTotalPage(data);
        });
    }, []);

    useEffect(() => {
        if (keyWords.trim() !== "") {
            setLoading(true);
            findProductByName(keyWords)
                .then((data) => {
                    setProducts(data);
                    setLoading(false);
                }).catch((err) => {
                    setError(err.message || "Lỗi tải dữ liệu");
                    setLoading(false);
                });
        }
    }, [keyWords]);

    useEffect(() => {
        console.log("pageNow: " + pageNow);
        console.log("keyWords: " + keyWords);
        if (keyWords.trim() === "") {
            setLoading(true);
            getProductPage(pageNow - 1, 6)
                .then((data) => {
                    setProducts(data);
                    setLoading(false);
                }).catch((err) => {
                    setError(err.message || "Lỗi tải dữ liệu");
                    setLoading(false);
                });
        }
    }, [pageNow, keyWords]);


    useEffect(() => {
        if (keyWords.trim() === "") {
            setLoading(true);
            getProductByCategory(categoryId)
                .then((data) => {
                    setProducts(data);
                    setLoading(false);
                }).catch((err) => {
                    setError(err.message || "Lỗi tải dữ liệu");
                    setLoading(false);
                });
        }
    }, [categoryId]);


    const changePage = (page: number) => {
        if (page >= 1 && page <= totalPage) {
            setPageNow(page);
        }
    };

    if (loading) return <div className="text-center mt-5">Đang tải dữ liệu...</div>;
    if (error) return <div className="text-danger text-center mt-5">Lỗi: {error}</div>;
    if (products.length === 0) {
        return (
            <div className="text-center mt-5">
                <div className="p-4 bg-light rounded-3 shadow-sm d-inline-block">
                    <i className="fas fa-box-open fa-3x text-secondary mb-3"></i>
                    <h4 className="fw-bold text-secondary">Không có sản phẩm</h4>
                    <p className="text-muted mb-0">Hãy thử tìm kiếm với từ khóa khác.</p>
                </div>
            </div>
        );
    }
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
