import './App.css';

import msg from 'virtual:open-digger-data';

function App() {
  console.log('virtual:open-digger-data: ', msg);

  const { info } = msg;

  return (
    <>
      <h1>{info ? `${info.owner}/${info.name}` : '--'}</h1>
    </>
  );
}

export default App;
