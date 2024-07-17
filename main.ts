input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 30; index++) {
        pins.servoWritePin(AnalogPin.P0, 80)
        basic.pause(300)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(300)
    }
})
