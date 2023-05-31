import { PanInfo, motion, useMotionValue } from "framer-motion";
import { GlobalState } from "../hooks/State";

export default function Window({ children }: { children: any }) {
  const { closeWindow } = GlobalState();

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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    x.set(info.point.x);
    y.set(info.point.y);
  };

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
        style={{ x, y }}
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
        <section className='content'>{children}</section>
      </motion.main>
    </>
  );
}
