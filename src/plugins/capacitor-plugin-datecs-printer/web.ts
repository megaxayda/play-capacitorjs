import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginDatecsPrinterPlugin, ConnectionStatus } from './definitions';

export class CapacitorPluginDatecsPrinterWeb
  extends WebPlugin
  implements CapacitorPluginDatecsPrinterPlugin
{
  constructor() {
    super();
  }
  connect(): Promise<void> {
    throw this.unavailable('Not available on web.');
  }

  print(): Promise<void> {
    throw this.unavailable('Not available on web.');
  }

  getBluetoothPairedDevices(): Promise<any> {
    throw this.unavailable('Not available on web.');
  }

  getConnectionStatus(): Promise<ConnectionStatus> {
    throw this.unavailable('Not available on web.');
  }
}
