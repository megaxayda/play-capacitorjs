import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginDatecsPrinterPlugin, ConnectionStatus } from './definitions';

export class CapacitorPluginDatecsPrinterWeb
  extends WebPlugin
  implements CapacitorPluginDatecsPrinterPlugin
{
  constructor() {
    super();
  }
  setAddress(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  connect(): Promise<void> {
    return Promise.resolve();
  }
  print(): Promise<void> {
    return Promise.resolve();
  }
  getBluetoothPairedDevices(): Promise<any> {
    return Promise.resolve({ status: 'Not available on web' });
  }

  getConnectionStatus(): Promise<ConnectionStatus> {
    return Promise.resolve({ status: 'Not available on web' });
  }
}
