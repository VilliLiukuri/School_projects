package com.example.e05launchamap

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.View
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var latEditText: EditText
    private lateinit var lngEditText: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        latEditText = findViewById(R.id.latEditText)
        lngEditText = findViewById(R.id.lngEditText)
    }

    // This function will be called when the button is clicked
    fun showMap(view: View) {
        // Get latitude and longitude values from EditText fields
        val latitude = latEditText.text.toString().toDoubleOrNull()
        val longitude = lngEditText.text.toString().toDoubleOrNull()

        // Check if latitude and longitude values are not null
        if (latitude != null && longitude != null) {
            // Use Uri.parse to create a location object with the latitude and longitude values and use the geo: protocol
            val locationUri = Uri.parse("geo:$latitude,$longitude")

            // Build the intent for Intent.ACTION_VIEW and the location URI
            val mapIntent = Intent(Intent.ACTION_VIEW, locationUri)

            // Start a new activity to show a map
            startActivity(mapIntent)
        }
    }
}
