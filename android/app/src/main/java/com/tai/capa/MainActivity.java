package com.tai.capa;

import com.getcapacitor.BridgeActivity;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import plugins.ScreenOrientation.ScreenOrientationPlugin;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(ScreenOrientationPlugin.class);
        super.onCreate(savedInstanceState);
    }
}