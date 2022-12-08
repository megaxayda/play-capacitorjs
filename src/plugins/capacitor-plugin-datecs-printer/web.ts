import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginDatecsPrinterPlugin } from './definitions';

export class CapacitorPluginDatecsPrinterWeb
  extends WebPlugin
  implements CapacitorPluginDatecsPrinterPlugin
{
  constructor() {
    super();
  }

  getConnectionStatus(): Promise<string> {
    return Promise.resolve('Not available on web');
  }
}
