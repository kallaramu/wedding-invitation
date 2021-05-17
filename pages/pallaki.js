import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Typewriter from "typewriter-effect/dist/core";
export default function Pallaki() {
  const [confetti, updateConfetti] = useState(null);
  useEffect(() => {
    setTimeout(() => {}, 1500);

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

    var typewriter = new Typewriter("#typewriter", {
      delay: 50,
    });
    typewriter
      .pauseFor(1500)
      .typeString(
        "<span>Jangachary<br/> <i class='pulse2'>♥</i> <br/>Pravalika</span>"
      )
      .start();
  }, []);

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-8  mx-auto">
            {confetti}
            <img
              className="w-50 pallaki"
              data-srcset="https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 300w, https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 400w, https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 600w, https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 800w"
              data-src="https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif"
              src="https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif"
            ></img>
            <br />
            <span id="typewriter"></span>
          </div>
        </div>
      </div>
    </>
  );
}
