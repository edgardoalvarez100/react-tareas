export const Login = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-md-8 col-lg-5 col-center m-4">
                            <h1>Login</h1>
                            <hr />
                            <form >
                                <div className="mb-3">
                                    <label for="InputEmail" className="form-label">Email address</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="mb-3">
                                    <label for="InputPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" />

                                </div>

                                <div className="d-grid gap-2 mb-3  mx-auto">
                                    <button className="btn btn-primary">Login</button>
                                    <button className="btn btn-secondary ">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}
