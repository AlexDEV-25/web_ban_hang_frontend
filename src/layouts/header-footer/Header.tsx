import List from "../category/List";
function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ALEX</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <List />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        {/* Thanh tìm kiếm + icon bên phải */}
                        <form className="d-flex ms-auto me-3 w-50" role="search">
                            <input
                                className="form-control me-2 flex-grow-1"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        {/* Giỏ hàng */}
                        <ul className="navbar-nav me-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </ul>

                        {/* Đăng nhập */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-user"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header