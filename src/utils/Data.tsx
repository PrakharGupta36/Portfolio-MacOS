import { ReactElement } from "react";
import Settings from "../apps/settings/Settings";

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
];
