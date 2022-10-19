function myF () {
    var x = document.getElementById('myText').value

    if (x == 1896) {
        document.getElementById('my').innerHTML = 'Правильно!'
    } else {
        document.getElementById('my').innerHTML = 'Ответ неверный'
    }
}