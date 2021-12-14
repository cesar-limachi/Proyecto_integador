package com.example.app_movil

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.StrictMode
import android.view.Window
import android.view.WindowManager
import android.widget.Toast
import com.android.volley.Response
import com.android.volley.toolbox.JsonArrayRequest
import com.android.volley.toolbox.Volley
import kotlinx.android.synthetic.main.activity_login.*
import org.json.JSONException

class loginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        val policy =
            StrictMode.ThreadPolicy.Builder().permitAll().build()
        StrictMode.setThreadPolicy(policy)

        btnIngresar.setOnClickListener(){
            val correo = txtCorreo.text.toString()
            val password = txtPassword.text.toString()
            val queue = Volley.newRequestQueue(this)
            var url = "http://192.168.0.3:3000" + "/cliente?"
            url = url + "Correo=" + correo + "&Password" + password

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
                        val llamaractividad = Intent(applicationContext, Token::class.java)
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

        btnSalir.setOnClickListener(){
            finish();
        }
    }
}