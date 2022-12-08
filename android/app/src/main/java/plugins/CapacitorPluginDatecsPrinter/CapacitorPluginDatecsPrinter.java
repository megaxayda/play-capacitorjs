package plugins.CapacitorPluginDatecsPrinter;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class CapacitorPluginDatecsPrinter {
    @Nullable
    private AppCompatActivity activity;
    private BroadcastReceiver receiver;

    public CapacitorPluginDatecsPrinter(AppCompatActivity activity) {
        this.activity = activity;
    }

    public String getConnectionStatus() {
        return "Work in progress";
    }

    public void setReceiver(BroadcastReceiver receiver) {
        this.receiver = receiver;
    }

    public void startMonitoring(@NonNull AppCompatActivity activity) {
        IntentFilter filter = new IntentFilter();
        filter.addAction(BluetoothAdapter.ACTION_STATE_CHANGED);
        filter.addAction(BluetoothDevice.ACTION_ACL_CONNECTED);

        activity.registerReceiver(receiver, filter);
    }

    public void stopMonitoring(@NonNull AppCompatActivity activity) {
        activity.unregisterReceiver(receiver);
    }
}
