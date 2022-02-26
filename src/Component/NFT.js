import './NFT.css';

function NFT() {
    return (
        <div className="NFT">
            <ul className="cardfts">
                <li>
                    <a href="#NFT" className="cardft">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="cardft__image" alt="" />
                        <div className="cardft__overlay">
                            <div className="cardft__header">
                                <svg className="cardft__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="cardft__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="cardft__header-text">
                                    <h3 className="cardft__title">Design</h3>
                                    <span className="cardft__status">Mockups</span>
                                </div>
                            </div>
                            <p className="cardft__description">We design beautiful digital experiences that leave your customers amazed.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#NFT" className="cardft">
                        <img src="https://i.imgur.com/2DhmtJ4.jpg" className="cardft__image" alt="" />
                        <div className="cardft__overlay">
                            <div className="cardft__header">
                                <svg className="cardft__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="cardft__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                <div className="cardft__header-text">
                                    <h3 className="cardft__title">Web Development</h3>
                                    <span className="cardft__status">Websites</span>
                                </div>
                            </div>
                            <p className="cardft__description">We create optimized web experiences to bump your revenues and leave your customers amazed.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#NFT" className="cardft">
                        <img src="https://i.imgur.com/2DhmtJ4.jpg" className="cardft__image" alt="" />
                        <div className="cardft__overlay">
                            <div className="cardft__header">
                                <svg className="cardft__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="cardft__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                <div className="cardft__header-text">
                                    <h3 className="cardft__title">App Development</h3>
                                    <span className="cardft__status">Apps</span>
                                </div>
                            </div>
                            <p className="cardft__description">We take your ideas, turning them into reality and putting them in hands of your customers to stay connected.</p>
                        </div>
                    </a>
                </li>
                {/* <li>
                    <a href="#NFT" className="cardft">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="cardft__image" alt="" />
                        <div className="cardft__overlay">
                            <div className="cardft__header">
                                <svg className="cardft__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="cardft__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="cardft__header-text">
                                    <h3 className="cardft__title">Jessica Parker</h3>
                                    <span className="cardft__tagline">Lorem ipsum dolor sit amet consectetur</span>
                                    <span className="cardft__status">1 hour ago</span>
                                </div>
                            </div>
                            <p className="cardft__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                        </div>
                    </a>
                </li> */}
            </ul>
        </div>
    );
};

export default NFT;
