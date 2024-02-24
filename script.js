//your JS code here. If requi
document.getElementById('level');
    var level = 0;
    while (element && element.parentElement) {
        level++;
        element = element.parentElement;
    }    
    alert(level);
}

