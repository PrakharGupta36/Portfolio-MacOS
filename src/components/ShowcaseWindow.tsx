import Window from "./Window";
import { GlobalState } from "../hooks/State";
import Controls from "./Controls";

export default function ShowcaseWindow() {
  const { window, close } = GlobalState();

  function App() {
    return (
      <>
        <Controls onControlClick={() => close("showcase")} />
        {window.showcase.content}
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
