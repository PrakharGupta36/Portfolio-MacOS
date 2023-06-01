import { motion } from "framer-motion";
import { GlobalState } from "../hooks/State";

export default function Window() {
  const { closeSettings, content, window } = GlobalState();

  const controls: {
    id: number;
    background: string;
    label: string;
    onClick: () => void;
  }[] = [
    {
      id: 0,
      background: "#fe5f57",
      label: "close",
      onClick: () => {
        if (window.settings) {
          closeSettings();
        } 
      },
    },
    {
      id: 1,
      background: "#ffbd2e47",
      label: "minimize",
      onClick: () => null,
    },
    {
      id: 2,
      background: "#28c840",
      label: "maximize",
      onClick: () => null,
    },
  ];

  return (
    <>
      <motion.main
        drag={window.canvas ? false : true}
        dragConstraints={{
          left: -Infinity,
          right: Infinity,
          top: -Infinity,
          bottom: Infinity,
        }}
        dragMomentum={false}
        className='window'
      >
        <motion.section className='controls'>
          <ul>
            {controls.map((e) => {
              return (
                <li
                  key={e.id}
                  style={{
                    backgroundColor: e.background,
                    cursor: e.id !== 1 ? "pointer" : "auto",
                  }}
                  onClick={() => e.onClick()}
                />
              );
            })}
          </ul>
        </motion.section>
        {content}
      </motion.main>
    </>
  );
}
