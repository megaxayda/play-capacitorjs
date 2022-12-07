import './App.css';

import { Toast } from '@capacitor/toast';
import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
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

        <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

        <p>
          Mess up the code in <code>App.tsx </code> and save the file.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
