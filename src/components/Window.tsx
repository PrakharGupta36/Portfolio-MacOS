import { motion } from "framer-motion";
import { GlobalState } from "../hooks/State";

export default function Window() {
  const { closeWindow, content } = GlobalState();

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
      onClick: () => closeWindow(),
    },
    {
      id: 1,
      background: "#ffbc2e",
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
        drag
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
                  style={{ backgroundColor: e.background }}
                  key={e.id}
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
