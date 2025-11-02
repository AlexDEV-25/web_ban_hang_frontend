import React, { useEffect, useState } from "react";
import CategoryProperties from "./components/CategoryProperties";
import type { Category } from "../../models/Category";
import { getAllCategory } from "../../layouts/api/CategoryApi";
const List: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Gọi API
        getAllCategory()
            .then((categories) => {
                setCategories(categories);
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
    console.log(categories);
    return (
        <>
            {categories.map((category) => (
                <CategoryProperties key={category.id} category={category} />
            ))}
        </>



    );
};

export default List;
