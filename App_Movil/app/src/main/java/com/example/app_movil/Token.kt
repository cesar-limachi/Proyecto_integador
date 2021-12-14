package com.example.app_movil

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.StrictMode
import android.widget.Toast
import com.android.volley.Response
import com.android.volley.toolbox.JsonArrayRequest
import com.android.volley.toolbox.Volley
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.activity_token.*
import kotlinx.android.synthetic.main.activity_vista_principal.*
import org.json.JSONException

class Token : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_token)

        val policy =
            StrictMode.ThreadPolicy.Builder().permitAll().build()
        StrictMode.setThreadPolicy(policy)

        btnIngresar2.setOnClickListener(){
            val token = txtToken.text.toString()
            val queue = Volley.newRequestQueue(this)
            var url = "http://192.168.0.3:3000" + "/reserva?"
            url = url + "Codigo=" + token

            val stringRequest = JsonArrayRequest(url,
                Response.Listener { response ->
                    try{
                        val valor = response.getJSONObject(0)
                        /*
                        Toast.makeText(
                            applicationContext,
                            "Validacion de correo " + valor.getString("correo") +
                                    " con password: " + valor.getString("password")+" correcta",
                            Toast.LENGTH_LONG
                        ).show() */
                        val llamaractividad = Intent(applicationContext, Vista_Principal::class.java)
                        startActivity(llamaractividad)
                        finish()
                    } catch (e: JSONException) {
                        Toast.makeText(
                            applicationContext,
                            "Error en la credencial proporcionada",
                            Toast.LENGTH_LONG
                        ).show()
                    }
                }, Response.ErrorListener {
                    Toast.makeText(
                        applicationContext,
                        "Compruebe que tiene acceso a internet",
                        Toast.LENGTH_LONG
                    ).show()
                })
            queue.add(stringRequest)
        }

        btnSalir2.setOnClickListener(){
            val intent = Intent(this, loginActivity::class.java)
            startActivity(intent)
        }
    }
}