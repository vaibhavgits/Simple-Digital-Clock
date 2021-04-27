function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    
    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    // Tip: 1000 ms = 1 second.
    // Tip: The function is only executed once. If you need to repeat execution, use the setInterval() method.
    // Tip: Use the clearTimeout() method to prevent the function from running.
    setTimeout(showTime, 1000);
    
}
showTime();