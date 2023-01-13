input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    music.playMelody("G B A G C5 B A B ", 500)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1996, 1, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Cow)
    music.playMelody("E B C5 A B G A F ", 500)
})
basic.showIcon(IconNames.Yes)
music.playTone(262, music.beat(BeatFraction.Breve))
