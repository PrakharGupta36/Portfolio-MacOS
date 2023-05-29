import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import { useSettings } from "./hooks/Settings";
import "./styles/style.css";
import { createGlobalStyle } from "styled-components";
import Animated from "./utils/Animated";
import { useEffect } from "react";

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
  const { backgroundImage } = useSettings();


  useEffect(() => {
    
  },[])

  return (
    <>
      <Animated/>
      <GlobalStyles imageUrl={backgroundImage} />
      <Navbar />
      <Dock />
    </>
  );
}
