package com.example.app_movil

import android.content.Context
import android.content.Intent
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.os.Build.VERSION_CODES.P
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ProgressBar
import android.widget.TextView
import kotlinx.android.synthetic.main.activity_datos_personales.*
import kotlinx.android.synthetic.main.activity_login.*
import kotlinx.android.synthetic.main.activity_temperatura_actual.*

class Temperatura_Actual : AppCompatActivity(){

    /* var txtTempView = textView
    private lateinit var sensorManager: SensorManager
    private var tempSensor: Sensor? = null
    private var sensorTempDisponible: Boolean? = null
    private var progressBar : ProgressBar? = null
    private var temperatura = 0
    */


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_temperatura_actual)

        btnregresar4.setOnClickListener(){
            val intent = Intent(this, Vista_Principal::class.java)
            startActivity(intent)
        }

        /* txtTempView = findViewById(R.id.txtTemp)
        sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
        tempSensor = sensorManager.getDefaultSensor(Sensor.TYPE_PRESSURE)
        progressBar= findViewById(R.id.progressBar) */

        /*if (sensorManager.getDefaultSensor(Sensor.TYPE_AMBIENT_TEMPERATURE) != null) {
            tempSensor = sensorManager.getDefaultSensor(Sensor.TYPE_AMBIENT_TEMPERATURE)
            sensorTempDisponible = true
        } else {
            txtTemp.setVisibility(View.GONE)
            sensorTempDisponible = false
        }

        if (sensorTempDisponible as Boolean) {
            sensorManager.registerListener(this, tempSensor, SensorManager.SENSOR_DELAY_NORMAL)
        }
        */
    }

    /* override fun onSensorChanged(event: SensorEvent) {
        temperatura = event.values[0].toInt()
        txtTemp.findViewById<TextView>(R.id.LTemperatura)
        progressBar?.progress = temperatura
    }

    override fun onAccuracyChanged(sensor: Sensor, accuracy: Int) {
        // Do something here if sensor accuracy changes.
    } */
}