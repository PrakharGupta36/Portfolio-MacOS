import { LocalState } from "../../hooks/State";
import Mockup from "../settings/components/Mockup";

export default function Wallpaper() {
  const wallpapers: { id: number; wallpaper: string }[] = [
    {
      id: 1,
      wallpaper: "/wallpapers/01.jpg",
    },
    {
      id: 2,
      wallpaper: "/wallpapers/02.jpg",
    },
    {
      id: 3,
      wallpaper: "/wallpapers/03.jpg",
    },
    {
      id: 4,
      wallpaper: "/wallpapers/04.jpg",
    },
  ];

  const { backgroundImage, setBackgroundImage } = LocalState();

  return (
    <>
      <section className='wallpaper'>
        <h1> Wallpaper </h1>
        <Mockup />
        <h2> Build-in Display </h2>
      </section>
      <div className='grid'>
        {wallpapers.map((e) => {
          return (
            <img
              key={e.id}
              src={e.wallpaper}
              onClick={() => {
                if (backgroundImage !== e.wallpaper) {
                  setBackgroundImage(e.wallpaper);

                }
              }}
              alt='img'
            />
          );
        })}
      </div>
    </>
  );
}
