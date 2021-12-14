package com.example.app_movil

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_ver_habitacion.*

class verHabitacion : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ver_habitacion)

        btnregresar5.setOnClickListener(){
            val intent = Intent(this, Servicio_Habitaciones::class.java)
            startActivity(intent)
        }

        val bundle :Bundle ?=intent.extras
        if (bundle!=null){
            txtId.setText(bundle.getString("id").toString())
            txtNumero.setText(bundle.getString("Nro_habitacion").toString())
            txtDescripcion.setText(bundle.getString("Descripcion").toString())
            txtWifi.setText(bundle.getString("Wifi").toString())
        }else{
            btnregresar5.setOnClickListener(){
                val intent = Intent(this, Servicio_Habitaciones::class.java)
                startActivity(intent)
            }
        }
    }
}