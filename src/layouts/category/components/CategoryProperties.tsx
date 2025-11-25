import React, { useContext } from "react";
import type { Category } from "../../../models/Category";
import { AppContext } from "../../../AppContext";
import { Link } from "react-router-dom";
interface Props {
    category: Category; // ✅ chỉ nhận 1 sản phẩm duy nhất
}


const CategoryProperties: React.FC<Props> = ({ category }) => {
    const ctx = useContext(AppContext);
    if (!ctx) return null;
    const { setCategoryId } = ctx;
    return (
        <>
            <li><Link onClick={() => setCategoryId(category.id)} className="dropdown-item" to="#">{category.categoryName}</Link></li>
        </>
    )
};
export default CategoryProperties;