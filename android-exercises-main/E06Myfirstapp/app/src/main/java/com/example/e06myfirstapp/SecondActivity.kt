package com.example.e06myfirstapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class SecondActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_second)

        val textViewMessage = findViewById<TextView>(R.id.textViewMessage)
        val message = intent.getStringExtra("MESSAGE")
        textViewMessage.text = message
    }
}
