import './App.css';

import ChannelRow from './components/ChannelRow';

let data = [
  {
    name: 'Alexander Alemayhu',
    thumbnail: '/avatar/aa.jpeg',
    description: 'A personal channel where I share productivity stuff related to Anki and Notion.',
    link: 'https://youtube.com/c/alexanderalemayhu'
  },
  {
    name: 'Anki in Minutes',
    thumbnail: '/avatar/aim.png',
    description: 'Short and sweet tutorials about Anki.',
    link: 'https://www.youtube.com/channel/UCH6xln-f73LO1_1vDCtgQeA'
  },
  {
    name: 'Alemayhu VODs',
    thumbnail: '/avatar/portrait_1.jpeg',
    description: 'Hour long old exports from my Twitch channel 😊',
    link: 'https://www.youtube.com/c/AlemayhuVODS'
  }
];

function App() {
  const channels = data.map(x => {
    return <li className="self-center justify-center w-4/5 ">
      <ChannelRow {...x} />
    </li>;
  });
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="self-center py-4 align-center">
        <div className="flex flex-col justify-center">
          <img
            alt="Avatar of Alexander Alemayhu"
            className="self-center h-12 w-12 rounded-full"
            src="/logo.png" />
        </div>
        <div className="py-2">
          <a className="text-white" href="https://twitter.com/aalemayhu">@aalemayhu</a>
        </div>
      </div>
      <div className="mx-2 text-center text-gray-700">
        <p>
          Below are links to my various YouTube channels, click on the red button to
          subscribe!
        </p>
      </div>
      <ul className="flex flex-col">
        {channels}
      </ul>
      <div className="text-center">
        <a className="text-white" href="https://studio.youtube.com">YouTube Studio</a>
      </div>
    </div>
  );
}

export default App;
