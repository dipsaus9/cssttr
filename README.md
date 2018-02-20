# CSSTR!
## Week 1
This week we kicked off this awesome project. With some lectures and online information we started coding on a website based on html and css only. This sound pretty easy but it has some challenges for me.
I already knew a lot of css before this project started, so I wanted to challenge myself on different things. One of those things was working with methods and functions I normally don't use, Grid for example.
This was kinda bugging me cause in my opinion css grid isn't that usefull. Don't get me wrong, css grid works great, expect not for my needs (yet). For example when I want to create a grid for 24 news articles I have to tell grid I got 24 columns.
In my opinion flex can take this job way easier. So maybe grid has some options I will use, cause it is very usefull, but now is not the time yet.

###How did i do it?
This week I created a working file in the src folder. This is where I put all my working js and scss files. I'm working with grunt for a compiler. Grunt will create a css folder which I will use for my index.html and all the other html files.	+I started of this assignment with the the given index.html by @wooorm. From this point i downloaded 4 different datasets from the KNMI website. As you may know these datasets are terrible to work with. So i changed the data from the dataset to a csv dataset by using javscript. At first this was a bit difficult cause i got stuck on the nesting part. I completly forgot to nest all the values for each location.
I created a home page combined with a product page. Next week I'll continue this by adding a about page and a loging page. I think this isn't challenging at all so I need some more challenges.

The most challenging part about this assignment was the radio buttons. I wanted to create a star review where You can see how many stars are active. The problem with this is that there is no way to select a previous element in css. I fixed this by turning the order around using flex.	+###What is next?
I created a div around all the radio buttons cause there is no way to use display flex on a fieldset; bug?. So I created a div around the buttons with a display flex property and a row-reverse property to turn them around.	+From a usefull csv i could change this data into a working chart that has already been made.
Next I created a complex css part where I select all the input fields after the checked input field. This way I had the oppertunity to style all stars before the active star. I'll try to find some new challenges next week.

## Week 2
What a week. We are already in the second week of this program and it's going fast! Monday I recieved some issues about my CSS. Cause I used grunt as a compiler for my scss I created double the amount of css. So this week I started over and created a new CSS only file. Let's get back to the roots!
Cause I started over again I wanted to create something a bit more challenging then last week. So I decided after some sketches to create a CSS only carousel (cause everybody loves caurousels!).

### A CSS CAROUSEL! HOW?
My first question was, how is this possible. Well, actually its pretty easy (first thought), I only had to create a button that will give a state to the next image, easy right? Well that did work but I couldnt scroll back to the previous image.
After a lot of trial and error I managed to push a commit with a basic carousel slider (tab based slider). It did work but it wasn't that fancy. I created this slider by using the target selector of CSS and HTML. By checking so I could style each slide while targeted.
After some time I decided to start over again and created a new file (app.css). This was my new working file, the style.css was my old (but still working) carousel slider. My new slider was based on radio buttons, cause it was way easier to controll.

After 900 lines off CSS and 1 hard week of working I created a CSS only carousel slider. The functions are based on the value of the radio buttons. By doing so I could select the next image that wasn´t selected and then I could give them a different style. I also managed to create this slider infinite.
It took a long time but by doing so I learned some validation again for the possiblities of CSS. It´s amazing! I highly recommend to challenge yourself by doing these weird challenges!

I also added some cool effects like clipping path and labels with a arrow background. Here is a cool example of the final product.
![Example of CSS only CAROUSEL](https://github.com/dipsaus9/cssttr/blob/master/img/example.PNG)
To see the final product go to this page: [https://dipsaus9.github.io/cssttr/](https://dipsaus9.github.io/cssttr/)
