import './Subscribe.css';

function Subscribe() {
    return (
        <>
            <div className="newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="section-title text-center">
                                <h2>Our Newslatter</h2>
                                <p>We bring the right people together to challenge established thinking and drive transformation.
                                    We will show the way to successive.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-7">
                            <form className="newsletter-form">
                                <input type="email" placeholder="Enter your email..." required />
                                    <button type="submit">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;
