def on_button_pressed_a():
    pins.servo_write_pin(AnalogPin.P0, 20)
    basic.pause(1000)
    pins.servo_write_pin(AnalogPin.P0, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)
