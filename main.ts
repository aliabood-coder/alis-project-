input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 B A G E A B C5 ", 120)
})
basic.forever(function () {
	
})
