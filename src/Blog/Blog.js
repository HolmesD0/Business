import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import BlogData from "./data.json";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";
import "./Blog.scss";

function Blog() {
  const Projects = BlogData.projects;
  const Blog = Children.toArray(
    Projects.map((project) => (
      <div className="Blog">
        <Swiper
          modules={[EffectFade, Pagination]}
          spaceBetween={30}
          effect="fade"
          pagination={{ el: ".blog-slider__pagination", clickable: true }}
          loop
          className="blog-slider"
        >
          <div className="blog-slider__wrp swiper-wrapper">
            <SwiperSlide className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={project.img} alt="" />
              </div>
              <div className="blog-slider__pagination"></div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">26 December 2019</span>
                <div className="blog-slider__title">{project.name}</div>
                <div className="blog-slider__text">{project.description}</div>
                <a href={project.source} className="blog-slider__button">
                  Show Code
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={project.img} alt="" />
              </div>
              <div className="blog-slider__pagination"></div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">26 December 2019</span>
                <div className="blog-slider__title">Bullets</div>
                <div className="blog-slider__text">
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <a href={project.source} className="blog-slider__button">
                  Show Code
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={project.img} alt="" />
              </div>
              <div className="blog-slider__pagination"></div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">26 December 2019</span>
                <div className="blog-slider__title">Skills</div>
                <div className="blog-slider__text">
                  <ul>
                    {project.skills.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </div>
                <a href={project.source} className="blog-slider__button">
                  Show Code
                </a>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    ))
  );

  return <>{Blog}</>;
}

export default Blog;
