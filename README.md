# flamingoBingo

## [Try it Out!](https://bobbyschank.github.io/flamingoBingo/bingo.html)

## [Link to my Trello](https://trello.com/b/lRlczRkg/flamingo-bingo)

![](wire-frames.jpg)

This game is for two players, one player plays at a time.
It is played similar to traditional American Bingo, however the balls are 
"called" faster.  Hence the stress.

After both players successfully acheive a bingo row, a winner is declared
dependent on who acheived bingo with less called bingo balls.

I used javascript to handle the game logic.  I created my own array element
randomizer to assign a number to each square on the board.  I used the same randomizer
to create an array of balls to call.

I avoided hard coding the game logic. To determine if a player acheived bingo, 
I assigned each square an index value, and on a successful click,
I used the modulo operator and division increment a row and column counter.  Once the counter
reaches five, the bingo alert fires.

Moving forward, I'd like to refactor away from using alerts, and put a
message div at the top of the screen.
