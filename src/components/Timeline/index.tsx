import { ReactNode } from "react";
import { Chrono } from "react-chrono";
import "./Timeline.scss";

interface TimelineItemModel {
  active?: boolean;
  cardDetailedText?: string | string[];
  cardSubtitle?: string;
  cardTitle?: string;
  content?: ReactNode | ReactNode[];
  date?: number | string | Date;
  id?: string;
  isNested?: boolean;
  items?: TimelineItemModel[];
  position?: string;
  timelineContent?: ReactNode;
  title?: string;
  url?: string;
  visible?: boolean;
}

interface TimelineProps {
  items: TimelineItemModel[];
  title: string;
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="Timeline">
      <h5 className="Timeline__title">{title}</h5>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={items}
        hideControls
        theme={{
          primary: "black",
          secondary: "white",
          cardBgColor: "white",
          cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "black",
          cardTitleColor: "black",
        }}
      />
    </div>
  );
}
