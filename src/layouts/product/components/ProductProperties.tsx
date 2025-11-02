import React, { useEffect, useState } from "react";
import type { Product } from "../../../models/Product";
import { getAllThumbnail } from "../../../layouts/api/ThumbnailApi";
import type { Thumbnail } from "../../../models/Thumbnail";
interface Props {
    product: Product; // ✅ chỉ nhận 1 sản phẩm duy nhất
}

const ProductProperties: React.FC<Props> = ({ product }) => {
    const [thumbnails, setThumbnail] = useState<Thumbnail[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        // Gọi API
        getAllThumbnail(product.id)
            .then((thumbnails) => {
                setThumbnail(thumbnails);
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
    let link: string = "https://ericavietnam.com/wp-content/uploads/2024/09/O1CN01rEbPin24qUO0Iwz6z_4198917442-0-cib.jpg";
    if (thumbnails[0] && thumbnails[0].link) {
        link = thumbnails[0].link;
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 product-card">
                <img
                    src={link}
                    className="card-img-top"
                    alt={product.productName}
                    style={{ height: "250px", objectFit: "cover" }}
                />
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
