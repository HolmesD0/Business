import { Link } from "react-router-dom";
import "./Service.css";

function Service() {
  return (
    <div className="Service">
      <div className="flip-card-container F">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://i.pinimg.com/originals/46/02/42/460242eabf11b15800f6ec182d20a915.jpg"
                alt="Work"
              />
              <figcaption>Web Dev</figcaption>
            </figure>

            <ul className="ul">
              <li className="li">React</li>
              <li className="li">Angular</li>
              <li className="li">Nodejs</li>
              <li className="li">MongoDB</li>
              <li className="li">PHP</li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://www.wallpapertip.com/wmimgs/165-1655306_gaming-keyboard-wallpaper-phone.jpg"
                alt="Work"
              />
            </figure>

            <button>
              <Link
                to="/WebDev"
                style={{ textDecoration: "none", color: "white" }}
              >
                Show
              </Link>
            </button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card-container S">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://image.winudf.com/v2/image1/Y29tLmZ1bGwuaGQud2FsbHBhcGVycy50YWxsX3ZlY3RpY2FsX3NjcmVlbl8xN18xNTQ3MzQxMDc3XzA3MQ/screen-17.jpg?fakeurl=1&type=.jpg"
                alt="Work"
              />
              <figcaption>App Dev</figcaption>
            </figure>

            <ul className="ul">
              <li className="li">Android</li>
              <li className="li">IOS</li>
              <li className="li">React Native</li>
              <li className="li">Java</li>
              <li className="li">JS</li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://image.winudf.com/v2/image1/Y29tLmZ1bGwuaGQud2FsbHBhcGVycy50YWxsX3ZlY3RpY2FsX3NjcmVlbl8xMF8xNTQ3MzQxMDY2XzA1MA/screen-10.jpg?fakeurl=1&type=.jpg"
                alt="Work"
              />
            </figure>

            <button>
              <Link
                to="/AppDev"
                style={{ textDecoration: "none", color: "white" }}
              >
                Show
              </Link>
            </button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card-container T">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://www.wallpapertip.com/wmimgs/1-15829_space-planet-man-dog-4k-4k-wallpaper-fantasy.jpg"
                alt="Work"
              />
              <figcaption>Design</figcaption>
            </figure>

            <ul className="ul">
              <li className="li">Mockup</li>
              <li className="li">Wireframe</li>
              <li className="li">Animation</li>
              <li className="li">Logo</li>
              <li className="li">3D</li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://www.xtrafondos.com/wallpapers/vertical/edificios-ciudad-de-noche-3183.jpg"
                alt="Work"
              />
            </figure>

            <button>
              <Link
                to="/Design"
                style={{ textDecoration: "none", color: "white" }}
              >
                Show
              </Link>
            </button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card-container S">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://www.itl.cat/pngfile/big/152-1527367_endless-summer-4k-hd-wallpaper-lake-mountains-mountain.jpg"
                alt="Work"
              />
              <figcaption>Ads</figcaption>
            </figure>

            <ul className="ul">
              <li className="li">Facebook</li>
              <li className="li">Instagram</li>
              <li className="li">Youtube</li>
              <li className="li">Pinterest</li>
              <li className="li">Google</li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://syanart.com/wp-content/uploads/2021/04/Assassins-Creed-Valhalla-4K-vertical-Wallpaper-min.jpg"
                alt="Work"
              />
            </figure>

            <button>
              <Link
                to="/Ads"
                style={{ textDecoration: "none", color: "white" }}
              >
                Show
              </Link>
            </button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
