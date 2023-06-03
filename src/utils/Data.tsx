interface DockItem {
  id: number;
  label: string;
  img: string;
}

export const dockData: DockItem[] = [
  {
    id: 0,
    label: "settings",
    img: "/icons/settings.png",
  },
  {
    id: 1,
    label: "showcase",
    img: "/icons/pen.png",
  },
];
