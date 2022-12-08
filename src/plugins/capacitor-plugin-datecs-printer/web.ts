import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginDatecsPrinterPlugin, ConnectionStatus } from './definitions';

export class CapacitorPluginDatecsPrinterWeb
  extends WebPlugin
  implements CapacitorPluginDatecsPrinterPlugin
{
  constructor() {
    super();
  }

  getConnectionStatus(): Promise<ConnectionStatus> {
    return Promise.resolve({ status: 'Not available on web' });
  }
}
