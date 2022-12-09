import type { PluginListenerHandle } from '@capacitor/core';

export type ConnectionStatus = {
  status: string;
};

export type BluetoothAddress = {
  address: string;
};

export interface CapacitorPluginDatecsPrinterPlugin {
  /**
   * Returns the bluetooth datecs printer connection status.
   */
  getConnectionStatus(): Promise<ConnectionStatus>;

  /**
   * Returns the bluetooth paired devices.
   */
  getBluetoothPairedDevices(): Promise<any>;

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

  setAddress(addressObj: BluetoothAddress): Promise<void>;

  connect(): Promise<void>;

  print(): Promise<void>;
}