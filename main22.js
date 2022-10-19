function myF () {
    var x = document.getElementById('myText').value

    if (x == 'о спорт, ты - мир') {
        document.getElementById('my').innerHTML = 'Правильно!'
    } else {
        document.getElementById('my').innerHTML = 'Ответ неверный'
    }
}