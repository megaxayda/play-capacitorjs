package plugins.CapacitorPluginDatecsPrinter;

import android.Manifest;
import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothClass;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;

import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;

import java.util.Set;

@CapacitorPlugin(name = "CapacitorPluginDatecsPrinter", permissions = {@Permission(alias = "bluetooth", strings = {Manifest.permission.BLUETOOTH_CONNECT})})
public class CapacitorPluginDatecsPrinterPlugin extends Plugin {
    public static final String CONNECTION_STATUS_CHANGE = "bluetoothDatecsPrinterConnectionChange";
    private CapacitorPluginDatecsPrinter implementation;

    @Override
    public void load() {
        implementation = new CapacitorPluginDatecsPrinter(getActivity());
        implementation.setReceiver(new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                final int state = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE, BluetoothAdapter.ERROR);

                if (state == BluetoothAdapter.STATE_ON && getBluetoothConnectionStatus()) {
                    updateConnectionStatus("connected");
                    return;
                }

                if (state == BluetoothAdapter.STATE_OFF) {
                    updateConnectionStatus("disconnected");
                    return;
                }

            }
        });
    }

    private boolean getBluetoothConnectionStatus() {
        BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        @SuppressLint("MissingPermission") Set<BluetoothDevice> pairedDevices = bluetoothAdapter.getBondedDevices();

        if (pairedDevices.size() > 0) {
            // There are paired devices. Get the name and address of each paired device.
            for (BluetoothDevice device : pairedDevices) {
                @SuppressLint("MissingPermission") String deviceName = device.getName();
                String deviceHardwareAddress = device.getAddress(); // MAC address
            }
            return true;
        }
        return false;
    }

    @PluginMethod()
    public void getConnectionStatus(PluginCall call) {
        String status = "disconnected";
        final boolean isConnected = getBluetoothConnectionStatus();

        if (isConnected) {
            status = "connected";
        }

        JSObject ret = new JSObject();
        ret.put("status", status);
        call.resolve(ret);
    }

    @Override
    protected void handleOnResume() {
        implementation.startMonitoring(getActivity());
    }

    @Override
    protected void handleOnPause() {
        implementation.stopMonitoring(getActivity());
    }

    private void updateConnectionStatus(String connectionStatus) {
        JSObject ret = new JSObject();
        ret.put("status", connectionStatus);
        notifyListeners(CONNECTION_STATUS_CHANGE, ret);
    }

    @PluginMethod()
    public void getBluetoothPairedDevices(PluginCall call) {
        implementation.getBluetoothPairedDevices(call);
    }


    @PluginMethod()
    public void setAddress(PluginCall call) {
        String address = call.getString("address");
        Log.i("address_TEST", address);
//        implementation.setAddress(address);

        JSObject ret = new JSObject();
        ret.put("address", address);
        call.resolve(ret);
    }

    @PluginMethod()
    public void connect(PluginCall call) {
        String address = call.getString("address");
        implementation.connect(address, call);
    }

    @PluginMethod()
    public void print(PluginCall call) {
        String content = call.getString("content");
        Log.i("address_TEST", content);

        implementation.printTaggedText(content, call);
    }
}