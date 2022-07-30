# START Title




## Section 1
Begin by creating a variable called ```||variable.timer||```. 
Drag the ```||variable.set timer to||``` block inside the ```||basic.on start||``` block.

```blocks
let timer = 0
timer = 0```


## Section 2
Next, drag the ```||basic.show showNumber||``` inside the ```||basic.forever||``` block.
Inside the ```||basic.show showNumber||```add the ```||variable.timer|```.

```blocks
})
basic.forever(function () {
    basic.showNumber(timer)
})```


## Section 3
Now, drag a ```||loops.everyInterval||``` block. Set the interval to 1000ms.
Inside the ```||loops.everyInterval||``` block, drag two ```||logic.if true then||``` blocks.
In the first ```||logic.if true then||``` place a ```||logic.0 < 0 ||``` comparison.
Change the first 0 to ```||variable.timer||``` and the second 0 with 120. 
Underneath, add  ```||variable.change timer by||``` 1. 

In the second ```||logic.if true then||``` place a ```||logic.0 = 0 ||``` comparison.
Change the first 0 to ```||variable.timer||``` and the second 0 with 120.
Underneath, drag a ```||music. playMelody||``` block. 
Click on the melody to set the melody. Leave the the tempo at 120 bpm.
Underneath the ```||music. playMelody||``` block drag a ```||basic.show showIcon```||. 
You can leave the heart icon or change it to your own.  
```blocks
})
loops.everyInterval(1000, function () {
    if (timer < 120) {
        timer += 1
    }
    if (timer == 120) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
        basic.showIcon(IconNames.Heart)
    }```

## Section 4
Lastly, drag an ```||input.on onButtonPressed||``` block. Set it to button A.  
Indide that block, add a ```||basic.clearScreen||``` block.
Underneath that one, add a ``` ||variable.set timer to||``` block and enter 0 for the number. 


```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    timer = 0```

## Section 5

Congratulations! Now you have a 2 minute timer that you can download onto your micro:bit. 
    


