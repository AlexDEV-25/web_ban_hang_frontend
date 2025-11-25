import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/ProductApi";
import type { Product } from "../../models/Product";

const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<Product | null>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { id } = useParams();
    let productId: number = 0
    try {
        productId = parseInt(id + "");
    } catch (error) {
        productId = 0;
    }

    useEffect(() => {
        if (productId !== 0) {
            setLoading(true);
            getProductById(productId)
                .then((data) => {
                    setProduct(data);
                    console.log(data);
                    setLoading(false);
                }).catch((err) => {
                    setError(err.message || "Lỗi tải dữ liệu");
                    setLoading(false);
                });
        }
    }, [productId]);


    if (loading) return <div className="text-center mt-5">Đang tải dữ liệu...</div>;
    if (error) return <div className="text-danger text-center mt-5">Lỗi: {error}</div>;
    return (
        <div className="product-detail">
            <div className="left">
                <img
                    src={product?.productImage}
                    alt="Product"
                />
            </div>

            <div className="right">
                <h1 className="title">{product?.productName}</h1>

                <p className="desc">{product?.description}</p>

                <div className="price-box">
                    <span className="price">
                        {product?.price?.toLocaleString()}₫
                    </span>
                    <span className="price-origin">
                        {product?.priceOrigin?.toLocaleString()}₫
                    </span>
                </div>

                <div className="info">
                    <p><strong>Mã sản phẩm:</strong> {product?.productCode}</p>
                    <p><strong>Còn lại:</strong> {product?.amount}</p>
                    <p><strong>Đã bán:</strong> {product?.sold}</p>
                </div>

                <div className="actions">
                    <button className="btn-buy">Mua ngay</button>
                    <button className="btn-add-cart">Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail