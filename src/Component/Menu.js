import './Menu.css';

function Menu() {
    return (
        <div className="Menu">
            <div className="background-one">
                <div className="link-container">
                    <a className="link-one Bungee" href="#Home">wireframe</a>
                </div>
            </div>
            <div className="background-two link-container">
                <a className="link-two Bungee" href="#Home">mockup</a>
            </div>
            <div className="background-three link-container">
                <a className="link-three Bungee" href="#Home">animation</a>
            </div>
        </div>
    );
};

export default Menu;
