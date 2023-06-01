import { LocalState } from "../../../hooks/State";

export default function Mockup() {
  const { backgroundImage } = LocalState();

  return (
    <>
      <div className='image-stack'>
        <img className='image1' src={backgroundImage} alt='img' />
        <img className='image2' src='/mockups/mac.png' alt='img' />
      </div>

    </>
  );
}
