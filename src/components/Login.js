import React from 'react';
import './custom.css';

const Login = () => {
    return (
        <div>
            <header className="page-back">
                <div className="main-block">
                    <h1 >Log In</h1>
                    <form action="/">
                        <hr/>

                        <label id="icon" for="name"><i className="fas fa-envelope"></i></label>
                        <input type="text" name="name" id="name" placeholder="Email" required/>

                        <label id="icon" for="name"><i className="fas fa-unlock-alt"></i></label>
                        <input type="password" name="name" id="name" placeholder="Password" required/>

                        <div className="btn-block">
                        <button type="submit" href="/">Login In</button>
                        <p style={{textAlign: "left"}}><a href="/">Forgotten password</a>.</p>
                        <div className="or" style={{marginTop: "10px", marginBottom: "10px", fontWeight: "bolder"}}>OR</div>
                        </div>
                    </form>

                    <form>
                        <div >
                        <button className="btn facebook" data-provider="facebook"><i className="fab fa-facebook-f"></i><span> Facebook</span></button>
                        <button className="btn twitter" data-provider="twitter"><i className="fab fa-twitter"></i><span> Twitter</span></button>
                        <button className="btn google" data-provider="google"><i className="fab fa-google"></i><span> Google</span></button>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
} 

export default Login;