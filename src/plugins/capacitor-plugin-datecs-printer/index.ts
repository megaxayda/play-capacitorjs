import { registerPlugin } from '@capacitor/core';

import type { CapacitorPluginDatecsPrinterPlugin } from './definitions';

const CapacitorPluginDatecsPrinter = registerPlugin<CapacitorPluginDatecsPrinterPlugin>(
  'CapacitorPluginDatecsPrinter',
  {
    web: () => import('./web').then((m) => new m.CapacitorPluginDatecsPrinterWeb()),
  },
);

export * from './definitions';
export { CapacitorPluginDatecsPrinter };
