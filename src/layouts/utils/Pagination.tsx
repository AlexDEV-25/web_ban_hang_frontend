
interface Props {
    pageNow: number;
    totalPage: number;
    pagination: any;
}

const Pagination: React.FC<Props> = (props) => {

    const listPage = [];
    // đang ở trang đầu tiên
    if (props.pageNow === 1) {
        listPage.push(props.pageNow);
        if (props.totalPage >= props.pageNow + 1) {
            listPage.push(props.pageNow + 1);
        }
        if (props.totalPage >= props.pageNow + 2) {
            listPage.push(props.pageNow + 2);
        }
    }
    // đang ở trang giữa
    else if (props.pageNow > 1) {
        listPage.push(props.pageNow - 1);
        listPage.push(props.pageNow);
        if (props.totalPage >= props.pageNow + 1) {
            listPage.push(props.pageNow + 1);
        }
    }
    // đang ở trang cuối cùng
    else if (props.pageNow === props.totalPage) {
        if (props.totalPage >= props.pageNow - 1) {
            listPage.push(props.pageNow - 1);
        }
        if (props.totalPage >= props.pageNow - 2) {
            listPage.push(props.pageNow - 2);
        }
        listPage.push(props.pageNow);
    }

    return (
        <div>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className="page-item" onClick={() => props.pagination.changePage(1)}>
                        <button className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    {listPage.map((page) => (
                        <li className="page-item" key={page} onClick={() => props.pagination.changePage(page)}>
                            <button className={page === props.pageNow ? "page-link active" : "page-link"}>{page}</button>
                        </li>
                    ))}
                    <li className="page-item" onClick={() => props.pagination.changePage(props.totalPage)}>
                        <button className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
