import Mockup from "../settings/components/Mockup";

export default function About() {
  return (
    <>
      <section className='about'>
        <h1> About </h1>
        <div className='grid'>
          <Mockup />
          <h1> Macbook Air </h1>
          <p> M1, 2020 </p>
        </div>
        <div className='box box-1'>
          <ul>
            <li>
              <span> Name </span> <span> Prakhar's ?? Macbook Air </span>
            </li>
            <li>
              <span> Chip </span> <span> Apple M1 (M2 is better) </span>
            </li>
            <li>
              <span> Memory </span> <span> 8GB (we assume) </span>
            </li>
            <li>
              <span> Serial Number </span> <span> dQw4w9WgXcQ </span>
            </li>
          </ul>
        </div>
        <div className='box box-2'>
          <h2> macOS </h2>
          <ul>
            <li>
              <span className="icon_span"> <img src="/icons/icon.png" alt="img" /> macOS Ventura </span> <span> Version 13.3.1 (No bugs now, right??) </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
