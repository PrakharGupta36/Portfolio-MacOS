import { motion } from "framer-motion";

interface ControlsProps {
  onControlClick: () => void;
  onMinimize: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onControlClick, onMinimize }) => {
  const controls = [
    {
      id: 0,
      background: "#fe5f57",
      label: "close",
      onClick: () => onControlClick(),
    },
    {
      id: 1,
      background: "#ffbd2e53",
      label: "minimize",
      onClick: () => onMinimize(),
    },
    {
      id: 2,
      background: "#28c84045",
      label: "maximize",
      onClick: () => null,
    },
  ];

  return (
    <motion.section className='controls'>
      <ul>
        {controls.map((control) => (
          <li
            key={control.id}
            style={{
              backgroundColor: control.background,
              cursor: control.id === 0 ? "pointer" : "auto",
            }}
            onClick={() => control.onClick()}
          />
        ))}
      </ul>
    </motion.section>
  );
};

export default Controls;
