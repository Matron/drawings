import HistoricalDate from "../utils/HistoricalDate";

export default interface Event {
  id: number;
  name: string;
  children: Event[];
  active: boolean;

  // mapObjects: MapObject[]
  // screenPos: ScreenPos
  // ?? timelineDisplay:

  startDate: HistoricalDate;
  endDate: HistoricalDate;
}
