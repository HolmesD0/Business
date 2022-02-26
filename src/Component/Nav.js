import { useState } from 'react';
import './Nav.css';

function Nav() {
    const [cdt, setCdt] = useState("containerN");
    const Animation = e => {
        cdt === "containerN" ? setCdt("containerN active") : setCdt("containerN");
    };

    return (
        <>
            <div className={cdt}>
                <div className="navbarN">
                    <div className="menuN">
                        <h3 className="logo">Omar<span>Mustafa</span></h3>
                        <div className="hamburger-menuN" onClick={Animation}>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>

                <div className="main-containerN">
                    <div className="main">
                        <header>
                            <div className="overlay">
                                <div className="inner">
                                    <h2 className="title">Click on NavBar icon</h2>
                                    <p>
                                        In this project I try to make a 3D navbar animation you can check it out by clicking on the nav bar icon on ther top right corner.
                                    </p>
                                    <button className="btnN">Read more</button>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div className="shadowN one"></div>
                    <div className="shadowN two"></div>
                </div>

                <div className="links">
                    <ul>
                        <li>
                            <a href="#Home" className="stylea">Home</a>
                        </li>
                        <li>
                            <a href="#Home" className="styleb">Services</a>
                        </li>
                        <li>
                            <a href="#Home" className="stylec">Web Dev</a>
                        </li>
                        <li>
                            <a href="#Home" className="styled">App Dev</a>
                        </li>
                        <li>
                            <a href="#Home" className="stylee">Design</a>
                        </li>
                        <li>
                            <a href="#Home" className="stylef">Ads</a>
                        </li>
                        <li>
                            <a href="#Home" className="styleg">About</a>
                        </li>
                        <li>
                            <a href="#Home" className="styleh">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Nav;
