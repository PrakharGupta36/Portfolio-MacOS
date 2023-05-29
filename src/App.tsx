import { useEffect, useState } from "react";
import MacOS from "./MacOS";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the current device is a laptop or desktop
    const isDesktopDevice = window.matchMedia("(min-width: 768px)").matches;

    setIsDesktop(isDesktopDevice);
  }, []);
  return (
    <>
      {isDesktop ? (
        <MacOS />
      ) : (
        <section className='mobile'>
          <h1>Open this website on a desktop</h1>
        </section>
      )}
    </>
  );
}
