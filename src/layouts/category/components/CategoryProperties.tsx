import React from "react";
import type { Category } from "../../../models/Category";
interface Props {
    category: Category; // ✅ chỉ nhận 1 sản phẩm duy nhất
}


const List: React.FC<Props> = ({ category }) => {
    return (
        <>
            <li><a className="dropdown-item" href="#">{category.categoryName}</a></li>
        </>
    )
};
export default List;