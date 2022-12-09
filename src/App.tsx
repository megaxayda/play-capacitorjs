import './App.css';

import { Toast } from '@capacitor/toast';
import get from 'lodash.get';
import React, { useEffect, useState } from 'react';

import { CapacitorPluginDatecsPrinter as printer } from './plugins/capacitor-plugin-datecs-printer';

function App() {
  const [count, setCount] = useState(0);
  const [orientation, setOrientation] = useState<string>('');
  const [log, setLog] = useState('');
  const [address, setAddress] = useState('');
  const [listAddress, setListAddress] = useState([]);

  // useEffect(() => {
  //   printer.addListener('bluetoothDatecsPrinterConnectionChange', (res) => {
  //     Toast.show({
  //       text: res.status,
  //     });
  //   });

  //   return () => {
  //     printer.removeAllListeners();
  //   };
  // }, []);

  const handleLog = (newLog: string) => {
    setLog((log) => log + '\n' + newLog);
  };

  return (
    <div className="App">
      {orientation}
      <div className="body">
        {/* <button
          onClick={async () => {
            const res = await printer.getConnectionStatus();
            console.log(res);
            // alert(res.status);
            await Toast.show({
              text: res.status,
            });
          }}
        >
          Get printer status
        </button> */}
        <button
          onClick={async () => {
            const res = await printer.getBluetoothPairedDevices();
            console.log('getBluetoothPairedDevices:', res);
            handleLog(JSON.stringify(res));
            setAddress(res.data[0].address);
            setListAddress(res.data);
          }}
        >
          Get printers
        </button>
        {listAddress.map((e, index) => (
          <button
            key={index}
            style={{ backgroundColor: 'green' }}
            onClick={async () => {
              const res = await printer.setAddress({ address });
              handleLog(JSON.stringify(res));
            }}
          >
            {'Connect ' + get(e, 'name', 'No name ' + index)}
          </button>
        ))}

        <button
          onClick={async () => {
            const res = await printer.connect();
            handleLog(JSON.stringify(res));
          }}
        >
          Connect printer
        </button>
        <button
          onClick={async () => {
            const res = await printer.print();
            handleLog(JSON.stringify(res));
          }}
        >
          Print
        </button>
        <p>{log}</p>
      </div>
    </div>
  );
}

export default App;
