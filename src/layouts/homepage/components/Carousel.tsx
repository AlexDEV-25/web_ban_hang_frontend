import React, { useEffect, useState } from "react";
import type { Product } from "../../../models/Product";
import { get3Product } from "../../../layouts/api/ProductApi";
import type { Thumbnail } from "../../../models/Thumbnail";

const Carousel: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        get3Product()
            .then((products) => {
                setProducts(products);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Lỗi tải dữ liệu");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-5">Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div className="text-danger text-center mt-5">Lỗi: {error}</div>;
    }

    return (
        <div>
            <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            data-bs-interval="10000"
                        >
                            <div className="row align-items-center">
                                <div className="col-5 text-center">
                                    {product.productImage ? (
                                        <img
                                            src={product.productImage}
                                            alt={product.productName}
                                            style={{ width: "150px" }}
                                            className="float-end"
                                        />
                                    ) : (
                                        <div>Đang tải ảnh...</div>
                                    )}
                                    <h5>{product.productName}</h5>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
