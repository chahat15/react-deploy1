import React from 'react';
import './custom.css';

const SignUp = () => {
    return (
        <div>
          <header className="page-back">
            <div className="main-block">
              <h1>Sign Up</h1>
              <form action="/">
                <hr/>
    
                <label id="icon" for="name"><i className="fas fa-envelope"></i></label>
                <input type="text" name="name" id="name" placeholder="Email" required/>
    
                <div>
                  <label id="icon" for="name"><i className="fas fa-user"></i></label>
                  <input type="text" name="name" id="name" placeholder=" First Name" required style={{width: "93px", marginRight: "8px", paddingRight: "40px"}}/>
                  <input type="text" name="name" id="name" placeholder="Last Name " required style={{width: "96px",  paddingRight: "40px"}}/>
                </div>
              </form>
    
                <form action="">
                <label id="icon" for="name"><i className="fas fa-unlock-alt"></i></label>
                <input type="password" name="name" id="name" placeholder="Password" required/>
                <label id="icon" for="name"><i className="fas fa-unlock-alt"></i></label>
                <input type="password" name="name" id="name" placeholder="Re-enter Password" style={{marginBottom: "5px"}} required/>
                <form style={{position: "relative"}}>
                  <label id="icon" for="name"><i className="fas fa-id-card"></i></label>
                  <input type="text" name="search-str" id="search-str" value="" style={{width: "95px", marginRight: "10px", paddingRight: "40px"}} placeholder="Enter OTP"/>
                  <button type="submit" style={{width: "80px" , top: "1px", position: "relative", transform: "scale(1.03)"}}>Verify</button>
                </form>
                <div className="btn-block">
                  <button type="submit" style={{width:" 85%"}}>Submit</button>
                </div>
              </form>
            </div>
          </header>
        </div>
      );
} 

export default SignUp;