function myF () {
    var x = document.getElementById('myText').value

    if (x == 1952) {
        document.getElementById('my').innerHTML = 'Правильно!'
    } else {
        document.getElementById('my').innerHTML = 'Ответ неверный'
    }
}