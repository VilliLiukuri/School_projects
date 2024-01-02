package com.example.e04sumcalculator

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val input1 = findViewById<EditText>(R.id.input1)
        val input2 = findViewById<EditText>(R.id.input2)
        val buttonAdd = findViewById<Button>(R.id.buttonAdd)
        val result = findViewById<TextView>(R.id.result)

        buttonAdd.setOnClickListener {
            val num1 = input1.text.toString().toDoubleOrNull()
            val num2 = input2.text.toString().toDoubleOrNull()

            if (num1 != null && num2 != null) {
                val sum = num1 + num2
                result.text = "Result: $sum"
            } else {
                result.text = "Error: Invalid input"
            }
        }
    }
}
