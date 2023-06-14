import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import "./styles/style.css";
import { createGlobalStyle } from "styled-components";
import Animated from "./utils/Animated";
import { GlobalState, LocalState } from "./hooks/State";
import ShowcaseWindow from "./components/ShowcaseWindow";
import SettingsWindow from "./components/SettingsWindow";
interface StyledHTMLProps {
  imageUrl: string;
}

const GlobalStyles = createGlobalStyle<StyledHTMLProps>`
  html, body {
    background: url(${(props) => props.imageUrl}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export default function MacOS() {
  const { window } = GlobalState();
  const { backgroundImage } = LocalState();

  return (
    <>
      <Animated />
      <GlobalStyles imageUrl={backgroundImage} />
      <Navbar />
      <Dock />

      {window.settings.isOpen && <SettingsWindow />}
      {window.news.isOpen && <ShowcaseWindow />}
    </>
  );
}
