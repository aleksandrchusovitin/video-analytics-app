import { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import VideoPlayer from './components/VideoPlayer';
import EventList from './components/EventList';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <VideoPlayer src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' />
        <EventList />
      </div>
    </Provider>
  );
};

export default App;
