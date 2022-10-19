function myF () {
    var x = document.getElementById('myText').value

    if (x == 'Владислав Третьяк') {
        document.getElementById('my').innerHTML = 'Правильно!'
    } else {
        document.getElementById('my').innerHTML = 'Ответ неверный'
    }
}