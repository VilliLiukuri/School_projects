package com.example.e16weatherwidget

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.util.Log
import android.widget.RemoteViews
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.bumptech.glide.Glide
import com.bumptech.glide.request.target.AppWidgetTarget
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter

/**
 * Implementation of App Widget functionality.
 */
class WeatherAppWidget : AppWidgetProvider() {
    // example call is : https://api.openweathermap.org/data/2.5/weather?q=Jyväskylä&APPID=YOUR_API_KEY&units=metric
    private val API_LINK: String = "https://api.openweathermap.org/data/2.5/weather?q="
    val API_ICON: String = "https://openweathermap.org/img/w/"
    val API_KEY: String = "1e06be0db419094333daca3365c4cf3a"

    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    )
    {
        // There may be multiple widgets active, so update all of them
        for (appWidgetId in appWidgetIds) {
            // Create an Intent to launch MainActivity
            val intent = Intent(context, MainActivity::class.java)
            val pendingIntent = PendingIntent.getActivity(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)

            // Get the layout for the App Widget and attach an on-click listener
            val views = RemoteViews(context.packageName, R.layout.weather_app_widget)
            views.setOnClickPendingIntent(R.id.cityTextView, pendingIntent)

            // create intent
            val refreshIntent = Intent(context, WeatherAppWidget::class.java)
            refreshIntent.action = "com.example.weatherwidget.REFRESH"
            refreshIntent.putExtra("appWidgetId", appWidgetId)
            // create pending intent
            val refreshPendingIntent = PendingIntent.getBroadcast(context, 0, refreshIntent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
            // set pending intent to refresh image view
            views.setOnClickPendingIntent(R.id.refreshImageView, refreshPendingIntent)

            // Load weather forecast
            loadWeatherForecast("Jyväskylä", context, views, appWidgetId, appWidgetManager)
            // comment below line, we will update widget later inside ^ above function
            //updateAppWidget(context, appWidgetManager, appWidgetId)
        }
    }

    private fun loadWeatherForecast(
        city:String,
        context: Context,
        views: RemoteViews,
        appWidgetId: Int,
        appWidgetManager: AppWidgetManager)
    {

        // URL to load forecast
        val url = "$API_LINK$city&APPID=$API_KEY&units=metric"
        // JSON object request with Volley
        val jsonObjectRequest = JsonObjectRequest(
            Request.Method.GET, url, null, { response ->
                try {
                    // load OK - parse data from the loaded JSON
                    // **add parse codes here... described later**
                    val mainJSONObject = response.getJSONObject("main")
                    val weatherArray = response.getJSONArray("weather")
                    val firstWeatherObject = weatherArray.getJSONObject(0)
                    // city, condition, temperature
                    val city = response.getString("name")
                    val condition = firstWeatherObject.getString("main")
                    val temperature = mainJSONObject.getString("temp")+" °C"
                    // time
                    val weatherTime: String = response.getString("dt")
                    val weatherLong: Long = weatherTime.toLong()
                    val formatter: DateTimeFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss")
                    val dt = Instant.ofEpochSecond(weatherLong).atZone(ZoneId.systemDefault()).toLocalDateTime().format(formatter).toString()

                    views.setTextViewText(R.id.cityTextView, city)
                    views.setTextViewText(R.id.condTextView, condition)
                    views.setTextViewText(R.id.tempTextView, temperature)
                    views.setTextViewText(R.id.timeTextView, dt)
                    // AppWidgetTarget will be used with Glide - image target view
                    val awt: AppWidgetTarget = object : AppWidgetTarget(context.applicationContext, R.id.iconImageView, views, appWidgetId) {}
                    val weatherIcon = firstWeatherObject.getString("icon")
                    val url = "$API_ICON$weatherIcon.png"

                    Glide
                        .with(context)
                        .asBitmap()
                        .load(url)
                        .into(awt)

                    // Instruct the widget manager to update the widget
                    appWidgetManager.updateAppWidget(appWidgetId, views)
                } catch (e: Exception) {
                    e.printStackTrace()
                    Log.d("WEATHER", "***** error: $e")
                }
            },
            { error -> Log.d("ERROR", "Error: $error") })
        // start loading data with Volley
        val queue = Volley.newRequestQueue(context)
        queue.add(jsonObjectRequest)
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)

        // got a new action, check if it is refresh action
        if (intent.action == "com.example.weatherwidget.REFRESH") {
            // get manager
            val appWidgetManager = AppWidgetManager.getInstance(context.applicationContext)
            // get views
            val views = RemoteViews(context.packageName, R.layout.weather_app_widget)
            // get appWidgetId
            val appWidgetId = intent.extras!!.getInt("appWidgetId")
            // load data again
            loadWeatherForecast("Jyväskylä", context, views, appWidgetId, appWidgetManager)
        }

    }

}
