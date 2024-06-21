import { useEffect, useRef, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents, updateCurrentTime } from '../store/actions';
import { RootState } from '../store/reducers';

const VideoPlayer: FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { events, currentTime } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (events.length === 0) {
      dispatch(fetchEvents()); // Загрузка событий, если они еще не загружены
    }
  }, [events, dispatch]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', () => {
        dispatch(updateCurrentTime(video.currentTime * 1000)); // Обновление текущего времени в миллисекундах
      });
    }
  }, [dispatch]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        src={src}
        onClick={togglePlay}
        style={{ width: '100%' }}
      />
      {events
        .filter(
          (event) => event.start <= currentTime && event.end >= currentTime
        )
        .map((event) => (
          <div
            key={event.id}
            style={{
              position: 'absolute',
              border: '2px solid green',
              left: `${event.zone.x}px`,
              top: `${event.zone.y}px`,
              width: `${event.zone.width}px`,
              height: `${event.zone.height}px`,
            }}
          />
        ))}
    </div>
  );
};

export default VideoPlayer;
