input.onButtonPressed(Button.A, function () {
    radio.sendNumber(degree)
})
input.onButtonPressed(Button.AB, function () {
    Music = randint(0, 10)
    radio.sendValue("Music", Music)
    basic.showNumber(Music)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(input.temperature())
})
let Music = 0
let degree = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
input.calibrateCompass()
radio.setGroup(11)
basic.showNumber(11)
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45) {
        basic.showString("N")
    } else if (degree < 135) {
        basic.showString("E")
    } else if (degree < 225) {
        basic.showString("S")
    } else if (degree < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
