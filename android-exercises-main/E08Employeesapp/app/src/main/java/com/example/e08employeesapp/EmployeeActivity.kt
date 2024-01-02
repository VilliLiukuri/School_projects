package com.example.e08employeesapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import com.bumptech.glide.Glide
import org.json.JSONObject

class EmployeeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_employee)

        // get data from intent
        val bundle: Bundle? = intent.extras
        if (bundle != null) {
            val employeeString = bundle.getString("employee")
            if (employeeString != null) {
                val employee = JSONObject(employeeString)

                // find employees title element from layout
                val nameTextView: TextView = findViewById(R.id.nameTextView)
                val emailTextView: TextView = findViewById(R.id.emailTextView)
                val phoneTextView: TextView = findViewById(R.id.phoneTextView)
                val imageView: ImageView = findViewById(R.id.employeeImage)

                // show employees title
                nameTextView.text = employee["lastname"].toString() + " " + employee["firstname"].toString()
                emailTextView.text = employee["email"].toString()
                phoneTextView.text = employee["phone"].toString()
                Glide.with(imageView.context)
                    .load(employee["image".toString()])
                    .into(imageView)
            }
        }
    }
}