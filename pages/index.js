import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Pallaki() {
  const [confetti, updateConfetti] = useState(null);
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
  }, []);
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12">
            {confetti}
            <img
              className="w-50 pallaki"
              data-srcset="https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 300w, https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 400w, https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 600w, https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif 800w"
              data-src="https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif"
              src="https://cdn.dribbble.com/users/101844/screenshots/2095926/palki.gif"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
