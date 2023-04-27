import "./../styles/VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import vid1 from "./../assets/video/vid1.mp4";
import vid2 from "./../assets/video/vid2.mp4";
import vid3 from "./../assets/video/vid3.mp4";
import vid4 from "./../assets/video/vid4.mp4";
import vid5 from "./../assets/video/vid5.mp4";
import vid6 from "./../assets/video/vid6.mp4";
import vid7 from "./../assets/video/vid7.mp4";
import vid8 from "./../assets/video/vid8.mp4";
import vid9 from "./../assets/video/vid9.mp4";
import vid10 from "./../assets/video/vid10.mp4";
import vid11 from "./../assets/video/vid11.mp4";
import vid12 from "./../assets/video/vid12.mp4";
import vid13 from "./../assets/video/vid13.mp4";
import vid14 from "./../assets/video/vid14.mp4";
import vid15 from "./../assets/video/vid15.mp4";
import vid16 from "./../assets/video/vid16.mp4";
import vid17 from "./../assets/video/vid17.mp4";
import vid18 from "./../assets/video/vid18.mp4";
import vid19 from "./../assets/video/vid19.mp4";
import vid20 from "./../assets/video/vid20.mp4";
import vid21 from "./../assets/video/vid21.mp4";
import vid22 from "./../assets/video/vid22.mp4";
import vid23 from "./../assets/video/vid23.mp4";
import vid24 from "./../assets/video/vid24.mp4";
import vid25 from "./../assets/video/vid25.mp4";
import vid26 from "./../assets/video/vid26.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

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
    {
      id: 4,
      src: vid4,
    },
    {
      id: 5,
      src: vid5,
    },
    {
      id: 6,
      src: vid6,
    },
    {
      id: 7,
      src: vid7,
    },
    {
      id: 8,
      src: vid8,
    },
    {
      id: 9,
      src: vid9,
    },
    {
      id: 10,
      src: vid10,
    },
    {
      id: 11,
      src: vid11,
    },
    {
      id: 12,
      src: vid12,
    },
    {
      id: 13,
      src: vid13,
    },
    {
      id: 14,
      src: vid14,
    },
    {
      id: 15,
      src: vid15,
    },
    {
      id: 16,
      src: vid16,
    },
    {
      id: 17,
      src: vid17,
    },
    {
      id: 18,
      src: vid18,
    },
    {
      id: 19,
      src: vid19,
    },
    {
      id: 20,
      src: vid20,
    },
    {
      id: 21,
      src: vid21,
    },
    {
      id: 22,
      src: vid22,
    },
    {
      id: 23,
      src: vid23,
    },
    {
      id: 24,
      src: vid24,
    },
    {
      id: 25,
      src: vid25,
    },
    {
      id: 26,
      src: vid26,
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
