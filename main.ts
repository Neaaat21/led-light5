basic.showIcon(IconNames.Happy)
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    Tinybit.RGB_Car_Program().show()
})
