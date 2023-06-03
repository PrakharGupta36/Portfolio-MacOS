import Window from "./Window";
import { GlobalState } from "../hooks/State";
import Controls from "./Controls";

export default function ShowcaseWindow() {
  const { window, close } = GlobalState();

  function App() {
    return (
      <>
        <Controls
          onMinimize={() => console.log("Building..")}
          onControlClick={() => close("news")}
        />
        {window.news.content}
      </>
    );
  }

  return (
    <>
      <Window>
        <App />
      </Window>
    </>
  );
}
