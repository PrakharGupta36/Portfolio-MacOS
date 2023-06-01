import { ReactElement } from "react";
import Settings from "../apps/settings/Settings";
import Canvas from "../apps/Canvas";

interface DockItem {
  id: number;
  label: string;
  img: string;
  content: ReactElement;
}

export const dockData: DockItem[] = [
  {
    id: 0,
    label: "Settings",
    img: "/icons/settings.png",
    content: <Settings />,
  },
  // {
  //   id: 1,
  //   label: "Canvas",
  //   img: "/icons/pen.png",
  //   content: <Canvas width={800} height={600} />,
  // },
];
