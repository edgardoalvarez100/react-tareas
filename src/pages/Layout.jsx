import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <>

            <div className=" bg-dark ">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 ">
                        <h5 className="my-0 mr-md-auto font-weight-normal text-white">Tareas REACT</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <a className="p-2 text-white" href="#">Features</a>
                            <a className="p-2 text-white" href="#">Enterprise</a>
                            <a className="p-2 text-white" href="#">Support</a>
                            <a className="p-2 text-white" href="#">Pricing</a>
                        </nav>
                        <a className="btn btn-outline-primary" href="#">Sign up</a>
                    </div>

                </div>
            </div>


            <main role="main">
                <Outlet />
            </main>

            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Desarrollado por  <a href="https://edgardoalvarez.com">Edgardo Alvarez</a>.
                    </p>
                </div>
            </footer>

            {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

            {/* <Outlet /> */}
        </>
    )
};