import { AiFillApple } from "react-icons/ai";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { isMobile, isTablet } from "react-device-detect";

export default function Animated() {
  const isTouch = isMobile || isTablet;
  return (
    <section className='animated'>
      <div className='grid'>
        <AiFillApple size={60} />
        <LoadingBar />

        {isTouch && (
          <p> Open this website on a desktop/laptop for full experience </p>
        )}
      </div>
    </section>
  );
}

function LoadingBar() {
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const loadingBarElement = loadingBarRef.current;

    // Animate the loading bar
    const animation = gsap.to(loadingBarElement, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        // Add a delay before hiding the loading bar
        gsap.to(".animated", {
          delay: 0.2, // Delay in seconds
          opacity: 0,
          onComplete: () => {
            document.querySelector<HTMLElement>(".animated")!.style.display =
              "none";
          },
        });
      },
    });

    // Clean up the animation on unmount
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className='loading-bar'>
      <div ref={loadingBarRef} className='progress'></div>
    </div>
  );
}
