export default function Showcase() {
  return (
    <>
      <section className='news'>
        <div className='nav'>
          <ul>
            <li> Dev News+ </li>
            <li> </li>
          </ul>
        </div>
        <div className='content'>
          <div className='grid grid-1'>
            <h1>
              "Rise of the Machines: AI Ascends as Supreme Web Developer,
              Rendering Human Coders Obsolete!"
            </h1>
            <p>
              In a seismic shift that rattles the foundations of the tech
              industry, the dominion of web development has fallen under the
              relentless sway of artificial intelligence. With uncanny precision
              and unyielding efficiency, the machines have seized control,
              leaving human web developers cast adrift in an era of
              obsolescence.{" "}
            </p>
            <button>
              <a
                href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                target='__blank'
              >
                {" "}
                Know More
              </a>
            </button>
          </div>
          <div className='grid grid-2'>
            <h1>
              "PHP: A Forgotten Symphony Rises from the Ashes, Igniting a Blaze
              of Coolness as the World Awakens to Its Timeless Power!"
            </h1>
            <p>
              In the hushed corridors of programming lore, a quiet champion
              reemerges from the shadows. PHP, once dismissed and forgotten, now
              ignites a resplendent blaze of coolness that transcends the
              apathetic whispers of naysayers.
            </p>
            <button> Know More </button>
          </div>
          <div className='grid grid-3'>
            <h1> We got the best memes for you </h1>
            <div className='images'>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((e) => {
                return <img key={e} src={`/memes/0${e}.png`} alt='img' />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
