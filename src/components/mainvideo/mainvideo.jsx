import video from "../../videos/GYM.mp4";
import './mainvideo.css';


function MainVideo() {


    return (<>

        <div clasname='container-video'>


            <video autoPlay muted loop id="bg-video" >
                <source src={video} type="video/mp4" />
            </video>

        </div>








    </>);
}

export default MainVideo;