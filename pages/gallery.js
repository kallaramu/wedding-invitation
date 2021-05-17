import Head from "next/head";
import { Zoom } from "react-slideshow-image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import WI from "./components/wedding-info";
import { motion } from "framer-motion";

const zoomOutProperties = {
  duration: 1500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

export default function Gallery() {
  const { IMAGES } = WI;

  const [isGalleryOpen, updateModalGallery] = useState(false);

  return (
    <>
      
    </>
  );
}
