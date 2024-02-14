import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HoverVideoPlayer from 'react-hover-video-player';


const VideoCarousel = () => {
const videoTesti= [
  {
    "_id": "65b39258a6aefe083ac97848",
    "name": "Bhavya",
    "course": "clat",
    "type": "video",
    "videoUrl": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/testi4.mp4",
    "videoPublicId": "sd9painfm373vgogjt8q",
    "__v": 0
  },
  {
    "_id": "65b38694a6aefe083ac9775f",
    "name": "Hansika",
    "course": "cat",
    "type": "video",
    "videoUrl": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/testi1.mp4",
    "videoPublicId": "rv2gt82mff1eujsnhwae",
    "__v": 0
  },
  {
    "_id": "65b2372ecb1d3a74e47224c5",
    "name": "Khushi",
    "course": "clat",
    "type": "video",
    "videoUrl": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/testi3.mp4",
    "videoPublicId": "j4zdsjoy7mgzitx42xpq",
    "__v": 0
  },
  {
    "_id": "65913d388f0e286dd7188d60",
    "name": "Mohit Jhori ",
    "course": "cat",
    "type": "video",
    "videoUrl": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/testi2.mp4",
    "videoPublicId": "bizxt1xvvvdvp2wajmme",
    "__v": 0
  }
 
  ]
  
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
    return (
      <Carousel responsive={responsive} infinite autoPlaySpeed={2000} showDots={false} infiniteLoop>
        {videoTesti?.map((video, index) => (
          <div key={index} className="card__content video-card">
             <HoverVideoPlayer videoSrc={video.videoUrl} muted={false} />
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default VideoCarousel;