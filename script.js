function finder() {
    let element = document.getElementById('level');
    var level = 0;
    while (element) {
        level++;
        element = element.parentElement;
    }    
    window.alert("The level of the element is: "+ level);
}
finder()
