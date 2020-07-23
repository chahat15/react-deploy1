import React from 'react';
import './navbar.css'
const Navbar = () => {
    return(
        <div id="menu-bar" >
    <h1>Sample header</h1>
    <ul>
        <li><button>  <a href="/about" style={{textDecoration: "none"}}> About Us</a>     </button></li>
        <li><button>  <a href="/contact" style={{textDecoration: "none"}}> Contact</a>      </button></li>
        <li><button>  <a href="/signup" style={{textDecoration: "none"}}> Sign Up</a>      </button></li>
        <li><button>  <a href="/" style={{textDecoration: "none"}}> Login</a>         </button></li>
    </ul>
</div>
    )
}

export default Navbar;