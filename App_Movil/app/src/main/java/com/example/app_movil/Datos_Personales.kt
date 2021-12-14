package com.example.app_movil

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_datos_personales.*
import kotlinx.android.synthetic.main.activity_temperatura_actual.*

class Datos_Personales : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_datos_personales)

        btnregresar1.setOnClickListener(){
            val intent = Intent(this, Vista_Principal::class.java)
            startActivity(intent)
        }
    }
}