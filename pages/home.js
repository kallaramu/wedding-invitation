import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

import Confetti from "react-confetti";

import WI from "./components/wedding-info";
export default function Home() {
  console.log(WI);
  const { BRIDEGROOM, BRIDE, DATE, TIME, VENUE,MOBILE } = WI;
  const [confetti, updateConfetti] = useState(null);
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => {
    // if(playing){
    //   updatePlayBtn(<i className="fas fa-3x  sound fa-volume-mute"></i>);
    // }else{
    //   updatePlayBtn(<i className="fas fa-3x  sound fa-volume-up"></i>);
    // }
    setPlaying((prev) => !prev);
  };
  const audioRef = useRef(null);
  const playRef = useRef(null);

  const [playBtn, updatePlayBtn] = useState(
    <i className="fas fa-3x  sound fa-volume-mute"></i>
  );


  useEffect(() => {

    var body = document.body,
      html = document.documentElement;

    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    updateConfetti(<Confetti width={window.innerWidth} height={height} />);

    // if (audioRef && audioRef.current) {
    //   if (playing) {
    //     audioRef.current.play();
    //   } else {
    //     audioRef.current.pause();
    //   }
    // }
    // setPlaying(true);
setTimeout(()=>{
  document.getElementById("my_audio").play();
},500);
    
  }, [playing]);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {BRIDEGROOM} &#10084;&#65039; {BRIDE}
        </title>
      </Head>
      {confetti}
      <main className={styles.main}  onClick={() => {
          togglePlaying();
        }}>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-2 col-sm-3 col-lg-4 position-relative">
              <img
                alt="image-top-left"
                className="img-fluid top-left-decoration position-absolute top-0 start-0"
                src="assets/flower-top-left.png"
              />
            </div>
            <div className="col-8 col-sm-6 col-lg-4">
              <section id="media"></section>
              <div className="wrap position-relative">
                <div className="couple-bg"></div>
                <div className="title">
                  <h1>{BRIDEGROOM} </h1>
                  <h2>&</h2>
                  <h1>{BRIDE} </h1>
                  {/* ON DATE MONTH YEAR, AT PLACE, AREA */}
                  <h3>Are getting married</h3>
                  <p>
                    on
                    <span className="date">{DATE}</span>, At
                    <span className="place">
                      <i className="fas fa-map-marker-alt"></i>
                      {VENUE}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2 col-sm-3 col-lg-4 position-relative">
              <img
                src="assets/flower-top-right.png"
                alt="image-top-right"
                className="img-fluid top-right-decoration position-absolute top-0 end-0"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-12 ">
              <div id="time" className="p-3 w-50 mx-auto">
                <i className="far fa-clock"></i>{TIME}
              </div>
              <p className="dance-med">Lunch & dancing to follow</p>
            </div>
            <div className="col-12">
              <div className="actions mx-auto">
                <a href="#" target="_blank" className="btn">
                  <div className="venue">SEE THE VENUE</div>
                </a>
                <a href="#" download="Jangachary-pravalika" className="btn">
                  <div className="venue">DOWNLOAD INVITATION CARD</div>
                </a>
              </div>
            </div>
            <div className="col-4 "></div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ">
            <p className="footer">
              Can't wait to celebrate auspicious moment of our family with you!
              <br />
              Just a ping away for any queries: {MOBILE}
              <span>s</span>
            </p>
            <div className="music">
              <audio
                src="assets/song.mp3"
                id="my_audio"
                ref={audioRef}
                loop="loop"
              ></audio>
            </div>
            <p className="happiness fs-2 text-center">
              Join us in our happiness!
              <br />
              <a href="https://twitter.com/jangacharysri" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href=" https://www.instagram.com/jangachary_sriramadas/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </div>
        </div>
      </main>
      <span
        className="player-btn d-none"
        onClick={() => {
          togglePlaying();
        }}
      >
        <img ref={playRef} src={"assets/mute.png"} />
      </span>
      <footer className={styles.footer + " text-center"}>
        Crafted by Jangachary with lots of{" "}
        <i className="fa fa-heart pulse2 " style={{ color: "red" }}></i> for
        Pravalika
      </footer>
    </div>
  );
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return (
    <span>
      Window size: {width} x {height}
    </span>
  );
}
