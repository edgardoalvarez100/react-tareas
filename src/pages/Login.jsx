import { useState } from "react"
import { loginHandler } from "../helpers/login";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const onEmailChange = ({ target }) => {
        setEmail(target.value)
    }
    const onPasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        loginHandler({ email, password });
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-md-8 col-lg-5 col-center m-4">
                            <h1>Login</h1>
                            <hr />
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="text" className="form-control" onChange={onEmailChange} name="email" />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" onChange={onPasswordChange} name="password" />

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
