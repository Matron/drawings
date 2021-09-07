import HistoricalDate from '../utils/HistoricalDate'

export default interface Event {
    id: number
    name: string
    // timline: Timeline
    active: boolean
    
    // mapObjects: MapObject[]
    // screenPos: ScreenPos
    // ?? timelineDisplay: 
    
    startDate: HistoricalDate
    endDate: HistoricalDate
  }
  