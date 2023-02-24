import './Read.scss';

function Read() {
    return (
        <div className="Read">
            <div className="container">
                <ul className="cardrs">
                    <li className="cardr cardrs__item">
                        <div className="cardr__frame">
                            <div className="cardr__picture">
                                <img src="https://image.flaticon.com/icons/svg/1496/1496034.svg" alt="" width="120" />
                            </div>
                            <h2 className="cardr__title">We Discover</h2>
                        </div>
                        <div className="cardr__overlay"></div>
                        <div className="cardr__content">
                            <h2>First Step</h2>
                            <p>Through extensive research and communication we discover the project needs and plan accordingly to deliver the best possible results.</p>
                        </div>
                    </li>
                    <li className="cardr cardrs__item">
                        <div className="cardr__frame">
                            <div className="cardr__picture">
                                <img src="https://image.flaticon.com/icons/svg/1336/1336494.svg" alt="" width="120" />
                            </div>
                            <h2 className="cardr__title">We Design</h2>
                        </div>
                        <div className="cardr__overlay"></div>
                        <div className="cardr__content">
                            <h2>Second Step</h2>
                            <p>We Design the master pieces based on the requirements to give your brand an image your audience can relate to.</p>
                        </div>
                    </li>
                    <li className="cardr cardrs__item">
                        <div className="cardr__frame">
                            <div className="cardr__picture">
                                <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120" />
                            </div>
                            <h2 className="cardr__title">We Deliver</h2>
                        </div>
                        <div className="cardr__overlay"></div>
                        <div className="cardr__content">
                            <h2>Thirth Step</h2>
                            <p>This is our favorite part, we deliver and most of the time we over deliver. No wonder why our clients love us so much.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Read;
