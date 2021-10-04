input.onButtonPressed(Button.A, function () {
    x += 1
    radio.sendString("" + (x))
    music.playMelody("C D F F C D E D ", 500)
})
input.onButtonPressed(Button.B, function () {
    x = 0
    radio.sendString("" + (x))
})
let 计时器 = 0
let 计时器2 = 0
let 亮度判定1亮2不亮 = 0
let x = 0
x = 0
OLED12864_I2C.init()
radio.setGroup(255)
if (input.lightLevel() > 10) {
    亮度判定1亮2不亮 = 1
    radio.sendString("lights on")
} else {
    亮度判定1亮2不亮 = 2
    radio.sendString("lights off")
}
loops.everyInterval(1000, function () {
    if (计时器2 > 0) {
        if (亮度判定1亮2不亮 == 1) {
            music.playMelody("C5 B G B F D F C5 ", 500)
        } else {
            计时器2 += -1
        }
    }
})
loops.everyInterval(1000, function () {
    if (亮度判定1亮2不亮 == 1) {
        计时器 += 1
    }
})
loops.everyInterval(1000, function () {
    if (计时器2 == 0) {
        计时器 += 1
    } else {
    	
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (input.lightLevel() > 10) {
        计时器 += 1
        if (!(亮度判定1亮2不亮 == 2)) {
            soundExpression.happy.playUntilDone()
            亮度判定1亮2不亮 = 2
            radio.sendString("lights on")
        }
    } else {
        if (!(亮度判定1亮2不亮 == 1)) {
            soundExpression.sad.playUntilDone()
            亮度判定1亮2不亮 = 1
            radio.sendString("lights off")
        }
    }
})
basic.forever(function () {
    if (计时器 > 2400 || 计时器 == 2400) {
        计时器 = 0
        计时器2 = 600
    }
})
basic.forever(function () {
    if (计时器 == 0) {
        if (亮度判定1亮2不亮 == 2) {
            if (计时器2 < 0 || 计时器2 == 0) {
                music.playMelody("G F G A E C G B ", 500)
            }
        }
    }
})
