import type { PluginListenerHandle } from '@capacitor/core';

export interface CapacitorPluginDatecsPrinterPlugin {
  /**
   * Returns the bluetooth datecs printer connection status.
   */
  getConnectionStatus(): Promise<string>;

  /**
   * Listens for bluetooth datecs printer connection status changes.
   */
  addListener(
    eventName: 'bluetoothDatecsPrinterConnectionChange',
    listenerFunc: (status: string) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Removes all listeners
   */
  removeAllListeners(): Promise<void>;
}
