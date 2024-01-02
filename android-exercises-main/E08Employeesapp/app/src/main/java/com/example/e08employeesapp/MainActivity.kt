package com.example.e08employeesapp

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    // Define recyclerView
    private lateinit var recyclerView:RecyclerView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Find recyclerView from the layout
        recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        // Use LinearManager as a layout manager for recyclerView
        recyclerView.layoutManager = LinearLayoutManager(this)

        //check connection
        val online = isOnline()

        // start loading JSON data
        if (online) loadJSON()
        else Toast.makeText(this,"Internet not connected!",Toast.LENGTH_SHORT).show()
    }

    private fun isOnline(): Boolean {
        val connMgr = getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = connMgr.activeNetwork ?: return false
        val activeNetwork = connMgr.getNetworkCapabilities(network) ?: return false
        return when {
            activeNetwork.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) -> true
            activeNetwork.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET) -> true
            activeNetwork.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) -> true
            else -> false
        }
    }

    private fun loadJSON() {
        // Instantiate the RequestQueue
        val queue = Volley.newRequestQueue(this)
        // URL to JSON data - remember use your own URL here
        val url = "https://student.labranet.jamk.fi/~AA4500/android_employees.json"
        // Create request and listeners
        val jsonObjectRequest = JsonObjectRequest(Request.Method.GET, url, null,
            { response ->
                // Get employees from JSON
                val employees = response.getJSONArray("employees")
                // Create Employees Adapter with employees data
                recyclerView.adapter = EmployeesAdapter(employees)
                Log.d("JSON", employees.toString())
            },
            { error ->
                Log.d("JSON", error.toString())
            }
        )
        // Add the request to the RequestQueue.
        queue.add(jsonObjectRequest)
    }
}