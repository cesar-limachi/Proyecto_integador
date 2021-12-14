package com.example.app_movil

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.activity_vista_principal.*

class Vista_Principal : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_vista_principal)

        btnInformacion.setOnClickListener(){
            val intent = Intent(this, Informacion_Habitacion::class.java)
            startActivity(intent)
        }

        btnDatosPersonales.setOnClickListener(){
            val intent = Intent(this, Datos_Personales::class.java)
            startActivity(intent)
        }

        btnServicios.setOnClickListener(){
            val intent = Intent(this, Servicio_Habitaciones::class.java)
            startActivity(intent)
        }

        btnTemperatura.setOnClickListener(){
            /*val intent = Intent(this, Temperatura_Actual::class.java)
            startActivity(intent) */
            var thread = Thread(Runnable() {
                try {
                    val intent = Intent(this, Temperatura_Actual::class.java)
                    startActivity(intent)

                } catch (e: InterruptedException){
                    e.printStackTrace()
                }
                finally {
                    finish()
                }
            })
            thread.start()
        }

        btnSalirPrincipal.setOnClickListener(){
            finish()
        }
    }
}