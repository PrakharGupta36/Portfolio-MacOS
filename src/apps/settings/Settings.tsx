import { FaUserCircle } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Mockup from "./components/Mockup";

export default function Settings() {
  return (
    <>
      <section className='settings'>
        <section className='grid-1'>
          <div className='search-container'>
            <HiMagnifyingGlass size={12.5} />
            <input className='no-submit' type='text' placeholder='Search...' />
          </div>
          <div className='user'>
            <div className='icon'>
              <FaUserCircle size={50} />
            </div>
            <div className='inner'>
              <p> User </p>
              <p> Apple ID </p>
            </div>
          </div>
          <div className='settings-options'>
            <ul>
              <li> Dock </li>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => {
                return <li key={e}> Wallpaper </li>;
              })}
            </ul>
          </div>
        </section>
        <section className='grid-2'>
          <Mockup />
        </section>
      </section>
    </>
  );
}
