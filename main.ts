let obstacle_distance = 0
let ultrasonic_value = 0
let light2 = 0
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
basic.forever(function () {
    light2 = input.lightLevel()
    ultrasonic_value = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
    if (light2 > 15 && obstacle_distance > 1) {
        obstacle_distance = ultrasonic_value
    } else {
        obstacle_distance = 100
    }
})
basic.forever(function () {
    if (light2 > 15 && obstacle_distance > 10) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, light2 * 5)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 111)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 111)
    }
})
basic.forever(function () {
    if (ultrasonic_value < 20) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        if (obstacle_distance < 10) {
            basic.showNumber(obstacle_distance)
        } else {
            basic.showIcon(IconNames.Surprised)
        }
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (obstacle_distance < 20) {
        music.playMelody("C - C - C - C - ", 700)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
