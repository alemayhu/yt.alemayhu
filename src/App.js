import './App.css';

import ChannelRow from './components/ChannelRow';

let data = [
  {
    name: 'Alexander Alemayhu',
    thumbnail: '/avatar/aa.jpeg',
    description: 'A personal channel where I share productivity stuff related to ⭐️ Anki and 🄽 Notion.',
    link: 'https://youtube.com/c/alexanderalemayhu'
  },
  {
    name: 'Alemayhu VODs',
    thumbnail: '/avatar/portrait_1.jpeg',
    description: 'Hour long exports from my Twitch channel 😊',
    link: 'https://www.youtube.com/c/AlemayhuVODS'
  },
  {
    name: 'Anki in Minutes',
    thumbnail: '/avatar/aim.png',
    description: 'Short and sweet tutorials in Anki 🌟',
    link: 'https://www.youtube.com/channel/UCH6xln-f73LO1_1vDCtgQeA'
  }
];

function App() {
  const channels = data.map(x => {
    return <li class="self-center justify-center w-4/5 ">
      <ChannelRow {...x} />
    </li>;
  });
  return (
    <div class="flex flex-col w-full h-screen bg-blue-200">
      <div class="self-center py-4 align-center">
        <div class="flex flex-col justify-center">
          <img
            alt="Avatar of Alexander Alemayhu"
            class="self-center w-16 rounded-full"
            src="/logo.png" />
        </div>
        <div class="py-2">
          <a class="text-white" href="https://twitter.com/aalemayhu">@aalemayhu</a>
        </div>
      </div>
      <div class="mx-2 text-center text-gray-700">
        <p>
          Below are links to my various YouTube channels, click on the red button to
          subscribe!
    </p>
      </div>
      <ul class="flex flex-col">
        {channels}
      </ul>
      <div style={{ textAlign: "center" }}>

        <a style={{ color: "grey" }} href="https://studio.youtube.com">YouTube Studio</a>
      </div>
    </div>
  );
}

export default App;
