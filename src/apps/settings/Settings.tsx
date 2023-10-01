import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Wallpaper from "../pages/Wallpapers";
import About from "../pages/About";
import AppleID from "../pages/AppleID";

export default function Settings() {
  const [options, setOptions] = useState<
    { id: number; label: string; active: boolean }[]
  >([
    {
      id: 1,
      label: "Wallpaper",
      active: false,
    },
    {
      id: 2,
      label: "About",
      active: false,
    },
  ]);

  const updateState = (id: number) => {
    setOptions((prevState) =>
      prevState.map((obj) => ({
        ...obj,
        active: obj.id === id,
      }))
    );
    setActive(false); // Make sure to set active to false here
  };

  const [active, setActive] = useState(false);

  const removeState = () => {
    setOptions((prevState) =>
      prevState.map((obj) => ({
        ...obj,
        active: false,
      }))
    );
    setActive(true); // Make sure to set active to true here
  };

  useEffect(() => {
    setActive(true);
  }, [setActive]);

  console.log(active);

  return (
    <>
      <section className='settings'>
        <section className='grid-1'>
          <div className='search-container'>
            <HiMagnifyingGlass size={12.5} />
            <input className='no-submit' type='text' placeholder='Search...' />
          </div>
          <div
            className={`user ${active ? "active" : ""}`}
            onClick={() => {
              setActive(true);
              removeState();
            }}
          >
            <div className='icon'>
              <FaUserCircle size={50} />
            </div>
            <div className='inner'>
              <p> Prakhar Gupta </p>
              <p> Apple ID </p>
            </div>
          </div>
          <div className='settings-options'>
            <ul>
              {options.map((e) => (
                <li
                  key={e.id}
                  onClick={() => {
                    updateState(e.id);
                    setActive(false);
                  }}
                  className={e.active ? "active" : ""}
                >
                  {e.label}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='grid-2'>
          {active && <AppleID />}
          {options[0].active && <Wallpaper />}
          {options[1].active && <About />}
        </section>
      </section>
    </>
  );
}
