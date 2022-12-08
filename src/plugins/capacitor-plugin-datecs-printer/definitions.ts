import type { PluginListenerHandle } from '@capacitor/core';

export type ConnectionStatus = {
  status: string;
};

export interface CapacitorPluginDatecsPrinterPlugin {
  /**
   * Returns the bluetooth datecs printer connection status.
   */
  getConnectionStatus(): Promise<ConnectionStatus>;

  /**
   * Listens for bluetooth datecs printer connection status changes.
   */
  addListener(
    eventName: 'bluetoothDatecsPrinterConnectionChange',
    listenerFunc: (res: ConnectionStatus) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Removes all listeners
   */
  removeAllListeners(): Promise<void>;
}
