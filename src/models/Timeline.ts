import Event from './Event'

export default interface Timeline {
  events: Event[];
  id: number;
  name: string;
  hidden: boolean;
  
  // scenario: Scenario;

  // startDate: HistoricalDate;
  // endDate: HistoricalDate;

}
