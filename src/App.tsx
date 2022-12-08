import './App.css';

import { Toast } from '@capacitor/toast';
import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import { CapacitorPluginDatecsPrinter as printer } from './plugins/capacitor-plugin-datecs-printer';
import { ScreenOrientation } from './plugins/screen-orientation';

function App() {
  const [count, setCount] = useState(0);
  const [orientation, setOrientation] = useState<string>('');

  useEffect(() => {
    ScreenOrientation.addListener('screenOrientationChange', (res) =>
      setOrientation(res.type),
    );

    ScreenOrientation.orientation().then((res) => setOrientation(res.type));

    return () => {
      ScreenOrientation.removeAllListeners();
    };
  }, []);

  const showHelloToast = async () => {
    await Toast.show({
      text: 'Hello!',
    });
  };

  return (
    <div className="App">
      {orientation}
      <div className="body">
        <button onClick={() => setCount((count) => count + 1)}>
          🪂 Click me : {count}
        </button>
        <button onClick={showHelloToast}>showHelloToast</button>
        <button
          onClick={() => {
            ScreenOrientation.lock({ orientation: 'landscape-primary' });
          }}
        >
          Lock
        </button>
        <button
          onClick={() => {
            ScreenOrientation.unlock();
          }}
        >
          Unlock
        </button>
        <button
          onClick={async () => {
            const res = await printer.getConnectionStatus();
            console.log(res);
            alert(res);
          }}
        >
          Get printer status
        </button>
      </div>
    </div>
  );
}

export default App;
