import React, { useEffect, useState } from "react";
import type { Product } from "../../../models/Product";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
interface Props {
    product: Product; // ✅ chỉ nhận 1 sản phẩm duy nhất
}

const ProductProperties: React.FC<Props> = ({ product }) => {
    const ctx = useContext(AppContext);
    if (!ctx) return null;

    const { setProductId } = ctx;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 product-card">
                <Link onClick={() => setProductId(product.id)} to={"/product/" + product.id}>
                    <img
                        src={product.productImage}
                        className="card-img-top"
                        alt={product.productName}
                        style={{ height: "250px", objectFit: "cover" }}
                    />
                </Link>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-dark fw-bold">{product.productName}</h5>
                    <p className="card-text text-muted small">{product.description}</p>
                    <p className="text-danger fw-bold mb-1">
                        {product.price?.toLocaleString()}₫
                    </p>
                    <p className="text-decoration-line-through text-muted small">
                        {product.priceOrigin?.toLocaleString()}₫
                    </p>
                    <div className="mt-auto d-flex justify-content-between">
                        <button className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-cart-plus"></i> Thêm giỏ
                        </button>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi bi-bag-heart"></i> Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductProperties;
