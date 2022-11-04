input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
    if (input.lightLevel() < 50) {
        led.setBrightness(255)
    }
    if (input.lightLevel() > 50) {
        led.setBrightness(128)
    }
    if (input.lightLevel() > 100) {
        led.setBrightness(64)
    }
    if (input.lightLevel() > 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
