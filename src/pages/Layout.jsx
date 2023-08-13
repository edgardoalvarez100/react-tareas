import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <div className=" bg-dark ">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 ">
                        <h5 className="my-0 mr-md-auto font-weight-normal text-white">TareasAPP</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link to="/" className="p-2 text-white">Home</Link>
                            <Link to="/tareas" className="p-2 text-white">Tareas</Link>


                        </nav>
                        <Link to="/signup" className="btn btn-outline-primary">Sign up</Link>
                    </div>

                </div>
            </div>


            <main role="main" className="mb-5">
                <Outlet />
            </main>

            <footer className="text-muted bg-dark fixed-bottom">
                <div className="container text-white ">
                    <div className="pt-3">
                        <p>Made  By  <a href="https://edgardoalvarez.com">Edgardo Alvarez</a>. Copyright © 2023
                        </p>
                    </div>
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
