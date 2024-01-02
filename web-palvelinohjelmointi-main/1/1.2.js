// Node.js program to demonstrate the	
// os.uptime() method
	
// Allocating os module
const os = require('os');

// Printing os.uptime() value
var ut_sec = os.uptime();
var ut_min = ut_sec/60;
var ut_hour = ut_min/60;

ut_sec = Math.floor(ut_sec);
ut_min = Math.floor(ut_min);
ut_hour = Math.floor(ut_hour);

ut_hour = ut_hour%60;
ut_min = ut_min%60;
ut_sec = ut_sec%60;

console.log("Up time: "
		+ ut_hour + " Hour(s) "
		+ ut_min + " minute(s) and "
		+ ut_sec + " second(s)");

// Convert total memory to kb, mb and gb
var total_memory = os.totalmem();
var total_mem_in_kb = total_memory/1024;
var total_mem_in_mb = total_mem_in_kb/1024;
var total_mem_in_gb = total_mem_in_mb/1024;
   
total_mem_in_kb = Math.floor(total_mem_in_kb);
total_mem_in_mb = Math.floor(total_mem_in_mb);
total_mem_in_gb = Math.floor(total_mem_in_gb);
   
total_mem_in_mb = total_mem_in_mb%1024;
total_mem_in_kb = total_mem_in_kb%1024;
total_memory = total_memory%1024;
  
// Display memory size
console.log("Total memory: " + total_mem_in_gb + "GB "
          + total_mem_in_mb + "MB " + total_mem_in_kb
          + "KB and " + total_memory + "Bytes");