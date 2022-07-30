input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    timer = 0
})
let timer = 0
timer = 0
loops.everyInterval(1000, function () {
    if (timer < 120) {
        timer += 1
    }
    if (timer == 120) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
    basic.showNumber(timer)
})
