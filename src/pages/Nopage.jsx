import { Link } from "react-router-dom"


export const Nopage = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-md-10 col-lg-8 col-center m-5">
                            <h1 style={{ fontSize: "8rem" }} className="text-uppercase">404</h1>
                            <h1 className="text-uppercase">Page not found</h1>

                            <Link to="/" className="btn btn-secondary">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
