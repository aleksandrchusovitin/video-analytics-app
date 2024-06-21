export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SET_EVENTS = 'SET_EVENTS';
export const UPDATE_CURRENT_TIME = 'UPDATE_CURRENT_TIME';
export const SEEK_TO = 'SEEK_TO';

interface Zone {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface Event {
  timestamp: number;
  duration: number;
  zone: Zone;
}

export const fetchEvents = (): { type: string } => ({ type: FETCH_EVENTS });
export const updateCurrentTime = (
  time: number
): { type: string; payload: number } => ({
  type: UPDATE_CURRENT_TIME,
  payload: time,
});
export const seekTo = (time: number): { type: string; payload: number } => ({
  type: SEEK_TO,
  payload: time,
});
export const setEvents = (events: Event[]) => ({
  type: SET_EVENTS,
  payload: events,
});
