import React, { useContext } from "react";
import type { Category } from "../../../models/Category";
import { AppContext } from "../../../AppContext";
interface Props {
    category: Category; // ✅ chỉ nhận 1 sản phẩm duy nhất
}


const CategoryProperties: React.FC<Props> = ({ category }) => {
    const ctx = useContext(AppContext);
    if (!ctx) return null;
    const { setCategoryId } = ctx;
    return (
        <>
            <li><a onClick={() => setCategoryId(category.id)} className="dropdown-item" href="#">{category.categoryName}</a></li>
        </>
    )
};
export default CategoryProperties;