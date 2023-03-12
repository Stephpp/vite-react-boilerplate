function Navbar() {
    const openMenu = () => {
        document.querySelector('.nav-menu')?.classList.toggle('active');
    }

    return (
        <nav className="navbar p-3">
            <div className="container row mx-auto justify-content-lg-between align-items-center">
                <div className="col-lg-6 d-flex align-items-center justify-content-between">
                    <h1>React Notes</h1>
                    <button onClick={openMenu} className="nav-trigger d-lg-none">
                        Press Me
                    </button>
                </div>
                <div className="nav-menu col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
                    <a href="">Notes</a>
                    <a className="mx-5" href="">New Note</a>
                    <a href="">About</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;