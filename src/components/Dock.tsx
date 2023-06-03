import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { dockData } from "../utils/Data";
import { GlobalState, WindowState } from "../hooks/State";

export default function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='dock-container'
    >
      {dockData.map((e) => {
        return <AppIcon props={e} mouseX={mouseX} key={e.id} />;
      })}
    </motion.div>
  );
}

function AppIcon({
  mouseX,
  props,
}: {
  mouseX: MotionValue;
  props: { id: number; label: string; img: string };
}) {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 70, 40]);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const { open } = GlobalState();

  const handleIconClick = () => {
    open(props.label as keyof WindowState);
  };

  return (
    <motion.div
      ref={ref}
      onClick={handleIconClick}
      style={{
        width,
        background: `url(${props.img}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
      className='app-icon'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <motion.div
          className='hover-label'
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
        </motion.div>
      )}
    </motion.div>
  );
}
