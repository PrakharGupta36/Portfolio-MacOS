import { LuExternalLink } from "react-icons/lu";

export default function AppleID() {
  const arr: { id: number; text: string; img: string; link: string }[] = [
    {
      id: 1,
      text: "GetThatPrinted",
      img: "/projects/01.png",
      link: "https://getthatprinted.vercel.app/",
    },
    {
      id: 2,
      text: "Solar System Viewer",
      img: "/projects/03.png",
      link: "https://r3f-solar-system.vercel.app/",
    },
    {
      id: 3,
      text: "MacOS Portfolio",
      img: "/projects/04.png",
      link: "http://localhost:5173/",
    },
    {
      id: 4,
      text: "Pokedex",
      img: "/projects/02.png",
      link: "https://poke-dex-bice.vercel.app/",
    },
  ];

  return (
    <section className='apple_id'>
      <div className='nav'>
        <ul>
          <a href='#home'>
            <li>Home</li>
          </a>
          <a href='#projects'>
            <li>Projects</li>
          </a>
          <a href='#contact'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className='content'>
        <div className='grids grid-1' id='home'>
          <div className='inner'>
            <h1> Prakhar Gupta</h1>
            <h2> I make websites... (kinda) </h2>

            <p>
              Hi, I'm Prakhar Gupta, a frontend developer who loves making
              amazing websites. I specialize in using React, a powerful tool for
              creating interactive sites. I'm really into 3D on the web, and I
              enjoy working with technologies like React Three Fiber. I also use
              animations with framer-motion and GSAP to bring websites to life.
              Overall, my goal is to create websites that look great and engage
              users.{" "}
            </p>
          </div>
        </div>
        <div className='grids grid-2' id='projects'>
          <div className='inner'>
            <div className='inner'>
              <h1> Projects </h1>
              <p> (Scroll Horizontally) </p>
            </div>
            <div className='images'>
              {arr.map((e) => {
                return (
                  <div className='card' key={e.id}>
                    <img src={e.img} alt='img' />
                    <a href={e.link} target='_blank'>
                      {e.text} <LuExternalLink />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='grids grid-3' id='contact'>
          <div className='inner'>
            <h1>Contact</h1>
            <p>
              {" "}
              I'm available for freelance projects, you can contact me directly
              from my email
              <a href='mailto:prakhargupta3680@gmail.com'>
                (prakhargupta3680@gmail.com)
              </a>
              or my socials down below:
            </p>

            <ul>
              <li>
                <a href='https://twitter.com/___prakhar' target='__blank'>
                  <img src='/icons/twitter.png' alt='img' />
                </a>
              </li>
              <li>
                <a href='https://github.com/PrakharGupta36' target='__blank'>
                  <img src='/icons/github.png' alt='img' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/prakhar-gupta36/'
                  target='__blank'
                >
                  <img src='/icons/linkedin.png' alt='img' />
                </a>
              </li>
            </ul>
            <form action=''></form>
          </div>
        </div>
      </div>
    </section>
  );
}
