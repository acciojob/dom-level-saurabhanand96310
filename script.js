//your JS code here. If requi
const element=document.getElementById('level');
    var level = 0;
    while (element) {
        level++;
        element = element.parentElement;
    }    
    alert("The level of the element is:"+ level);


