import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Typewriter from "typewriter-effect/dist/core";
import Home from "./home";
import Pallaki from "./pallaki";
export default function index() {
  const [confetti, updateConfetti] = useState(null);
  const [ele, updateEle] = useState(<Pallaki />);
  useEffect(() => {
    setTimeout(() => {
      updateEle(<Home />);
    }, 4500);
  });
  return <>{ele}</>;
}
