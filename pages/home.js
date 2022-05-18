import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { Zoom } from "react-slideshow-image";
import Image from "next/image";
import Confetti from "react-confetti";

import WI from "./components/wedding-info";
import Gallery from "./gallery";

export default function Home() {
  const zoomOutProperties = {
    duration: 1500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  const { IMAGES } = WI;
  const {
    LIVE_INFO,
    BRIDEGROOM,
    BRIDE,
    DATE,
    TIME,
    VENUE,
    MOBILE,
    SONG,
    LOCATION,
  } = WI;

  const { IS_PRESENT, URL } = LIVE_INFO;
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

    updateConfetti(
      <Confetti
        colors={[
          "#c19fcf",
          "#e0cceb",
          "#a76c8c",
          "#597572",
          "#5e8d8fa3",
          "#b7d1b1",
          "#efe2f5",
        ]}
        width={window.innerWidth}
        height={height}
      />
    );

    // if (audioRef && audioRef.current) {
    //   if (playing) {
    //     audioRef.current.play();
    //   } else {
    //     audioRef.current.pause();
    //   }
    // }
    // setPlaying(true);
    document.querySelector("body").click();
    setTimeout(() => {
      // document.getElementById("my_audio").play();
      // document.querySelector("audio").play();
      const audio = document.querySelector("audio");
      if (!navigator.userAgent.indexOf("Firefox") > -1) {
        audio.pause();
        audio.play();
      }
    }, 500);
  }, [playing]);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {BRIDEGROOM} &#10084;&#65039; {BRIDE}
        </title>
      </Head>
      {confetti}
      <main
        className={styles.main + " slideIn"}
        onClick={() => {
          togglePlaying();
        }}
      >
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-2 col-sm-3 col-lg-3 position-relative">
              <img
                alt="image-top-left"
                className="img-fluid top-left-decoration position-absolute top-0 start-0"
                src="assets/flower-top-left.png"
              />
            </div>
            <div className="col-8 col-sm-6 col-lg-6 position-relative">
              <section id="media"></section>
              <img
                alt="image-top-left"
                className="img-fluid top-left-decoration position-absolute top-0 ganesh-icon"
                src="assets/ganesha.png"
              />
            </div>
            <div className="col-2 col-sm-3 col-lg-3 position-relative">
              <img
                src="assets/flower-top-right.png"
                alt="image-top-right"
                className="img-fluid top-right-decoration position-absolute top-0 end-0"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-12">
              <div className="wrap position-relative mt-5">
                <div className="couple-bg"></div>
                <div className="title mt-2">
                  <h1>{BRIDEGROOM} </h1>
                  <h2>&</h2>
                  <h1>{BRIDE} </h1>
                  {/* ON DATE MONTH YEAR, AT PLACE, AREA */}
                  <h3>Are getting married</h3>
                  on
                  <p id="time" className="p-3 w-50 mx-auto t-border">
                    {DATE} {TIME}
                  </p>
                  <i className="fas fa-map-marker-alt"></i> &nbsp;
                  <a href={LOCATION} target="_blank" className="">
                    {VENUE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ">
            <p className="footer">
              Can't wait to celebrate this auspicious moment of our family with
              you!
            </p>
            <p className="happiness fs-5 text-center">
              Lunch: 25 MAY 2022 12:00 AM. onwards at Laxmi ganapathi kalyana mandapam,Ayyannapeta,Gantyada road,Vizianagaram        
            </p>            
            <div className="music">
              <audio autoPlay loop hidden controls>
                <source src={`assets/${SONG}.mp3`} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <p className="happiness fs-2 text-center">
              Join us in our happiness!
              <br />
              <a className="d-none" href="https://twitter.com/jangacharysri" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/gorja.dinesh" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
              &nbsp;&nbsp;
              <a className="d-none"
                href=" https://www.instagram.com/jangachary_sriramadas/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              &nbsp;&nbsp;
              <i
                data-bs-toggle="modal"
                data-bs-target="#galleryModal"
                className="fas fa-image"
              ></i>
              &nbsp;&nbsp;
              <a className="d-none"
                href={URL}
                target="_blank"
                
              >
                <i className={"fas fa-video "}></i>
              </a>
            </p>
          </div>

          <div className="col-12">
            <div className="actions mx-auto text-center">
              <div className="">
                <a
                  href={`assets/gorja.pdf`}
                  download="Jangachary-pravalika"
                  className="btn btn-outline-info"
                >
                  VIEW INVITATION CARD
                </a>
              </div>
            </div>
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
        Crafted by Dinu with lots of{" "}
        <i className="fa fa-heart pulse2 " style={{ color: "red" }}></i> for
        Teja
      </footer>
      <div
        className="modal fade"
        id="galleryModal"
        tabndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Dinesh {" "}
                <i className="fa fa-heart pulse2 " style={{ color: "red" }}></i>{" "}
                Tejaswani
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="slide-container">
                <Zoom {...zoomOutProperties}>
                  {IMAGES.map((i, index) => (
                    <img
                      className="img-fluid modal-img mx-auto"
                      key={index}
                      // style={{ width: "100%" }}
                      src={i}
                    />
                  ))}
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
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
