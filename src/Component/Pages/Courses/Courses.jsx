import React from "react";
import "./Courses.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Courses = () => {
  return (
    <div>
      <div className="carousel-container">
        <div className="text1">
          <h1>Let Learn Some New</h1>
        </div>
        <div className="video-container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={true}
          >
            <div>
              <iframe
                width="560"
                height="415"
                src="https://www.youtube.com/embed/53dGOf-Io0U?si=o2txpJ0ISjF4qk3C"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="415"
                src="https://www.youtube.com/embed/TcOEt6TdoYQ?si=J7IdQJzwCnghAwea"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="415"
                src="https://www.youtube.com/embed/1SZle1skb84?si=c5lAboVJqFZFXDzp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="415"
                src="https://www.youtube.com/embed/flDBNpQo1S0?si=WeGMWlDz_zbAER0R"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Courses;
