import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { seekTo } from '../store/actions';

const formatTime = (ms: number) => {
  const date = new Date(ms);
  return `${date.getUTCMinutes().toString().padStart(2, '0')}:${date
    .getUTCSeconds()
    .toString()
    .padStart(2, '0')}:${date
    .getUTCMilliseconds()
    .toString()
    .padStart(3, '0')}`;
};

const EventList: React.FC = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleSeek = (time: number) => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.currentTime = time / 1000; // Конвертация миллисекунд в секунды
      dispatch(seekTo(time));
    }
  };

  return (
    <ul>
      {events
        .sort((a, b) => a.start - b.start)
        .map((event) => (
          <li key={event.id} onClick={() => handleSeek(event.start)}>
            {formatTime(event.start)} - {event.description}
          </li>
        ))}
    </ul>
  );
};

export default EventList;
