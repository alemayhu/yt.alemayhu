import data from './channels.json';
import './App.css';

import ChannelRow from './components/ChannelRow';

function App() {
  const channels = data.map((x) => {
    return (
      <li key={x.link} className="self-center justify-center w-4/5 ">
        <ChannelRow {...x} />
      </li>
    );
  });
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="self-center py-4 align-center">
        <div className="flex flex-col justify-center">
          <img
            alt="Avatar of Alexander Alemayhu"
            className="self-center h-12 w-12 rounded-full"
            src="/logo.png"
          />
        </div>
        <div className="py-2">
          <a className="text-white" href="https://twitter.com/aalemayhu">
            @aalemayhu
          </a>
        </div>
      </div>
      <div className="mx-2 text-center text-gray-700">
        <p>
          Below are links to my various YouTube channels, click on the red
          button to subscribe!
        </p>
      </div>
      <ul className="flex flex-col">{channels}</ul>
      <div className="text-center">
        <a className="text-white" href="https://studio.youtube.com">
          YouTube Studio
        </a>
      </div>
    </div>
  );
}

export default App;
