

export const Signup = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-md-8 col-lg-5 col-center m-4">
                            <h1>Sign Up</h1>
                            <hr />
                            <form >
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" />

                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" />
                                </div>

                                <div className="d-grid gap-2 mb-3  mx-auto">
                                    <button className="btn btn-primary">Sign Up</button>
                                    <button className="btn btn-secondary ">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}
