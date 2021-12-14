package com.example.app_movil

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_informacion_habitacion.*
import kotlinx.android.synthetic.main.activity_temperatura_actual.*

class Informacion_Habitacion : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_informacion_habitacion)

        btnregresar2.setOnClickListener(){
            val intent = Intent(this, Vista_Principal::class.java)
            startActivity(intent)
        }
    }
}