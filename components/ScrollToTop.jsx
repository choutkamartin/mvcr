import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <button
      type="button"
      className={`${
        visible ? "block" : "hidden"
      } flex p-4 lg:p-4 rounded fixed bg-sky-700 hover:bg-sky-600 z-50 right-2 bottom-2 lg:right-8 lg:bottom-8`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        size="sm"
        icon={faArrowCircleUp}
        className="text-white"
        aria-hidden="true"
      />
    </button>
  );
};

export default ScrollButton;
