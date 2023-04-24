import "./../styles/VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import vid1 from "./../assets/video/vid1.mp4";
import vid2 from "./../assets/video/vid2.mp4";
import vid3 from "./../assets/video/vid3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import { useRef } from "react";

const VideoCarousel = () => {
  const videos = [
    {
      id: 1,
      src: vid1,
    },
    {
      id: 2,
      src: vid2,
    },
    {
      id: 3,
      src: vid3,
    },
  ];

  return (
    <div className="box">
      <Carousel interval={null}>
        {videos.map((video) => {
          return (
            <Carousel.Item key={video.id}>
              <ReactPlayer
                url={video.src}
                pip={true}
                width="100%"
                controls={false}
                playing={true}
                loop={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
