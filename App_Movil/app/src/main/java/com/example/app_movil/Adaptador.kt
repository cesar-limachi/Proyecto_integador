package com.example.app_movil

import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class Adaptador (val ListaServicios:ArrayList<Elementos>): RecyclerView.Adapter<Adaptador.ViewHolder>() {

    override fun getItemCount(): Int {
        return ListaServicios.size;
    }

    class ViewHolder (itemView : View):RecyclerView.ViewHolder(itemView) {
        val fNumero= itemView.findViewById<TextView>(R.id.elementoNumero)
    }
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder?.fNumero?.text=ListaServicios[position].Nro_habitacion.toString() + "Habitacion"
        var id = ListaServicios[position].id
        var numero = ListaServicios[position].Nro_habitacion
        var descripcion = ListaServicios[position].Descripcion
        var wifi = ListaServicios[position].Wifi

        holder.itemView.setOnClickListener(){
            val llamaractividad = Intent(holder.itemView.context, verHabitacion::class.java)
            llamaractividad.putExtra("id", id.toString())
            llamaractividad.putExtra("Nro_habitacion", numero.toString())
            llamaractividad.putExtra("Descripcion", descripcion.toString())
            llamaractividad.putExtra("Wifi", wifi.toString())
            holder.itemView.context.startActivity(llamaractividad)
        }
    }
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val v = LayoutInflater.from(parent?.context).inflate(R.layout.listaservicios, parent, false);
        return ViewHolder(v);
    }
}