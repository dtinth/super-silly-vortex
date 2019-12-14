# super-silly-vortex presentation

This is the presentation for this project I made at [Super Silly Hackathon 2019](https://supersillyhackathon.sg/).

When I first presented this during the event I had only 5 minutes and no time to rehearse. This is the more refined version.

### Hello! I’m Thai from Thailand.
<p align="center"><img src="./slides/slides.001.jpeg" width="640" /></p>

### Last June, I came to Singapore. And for the first time, I am greeted with this beautiful building. I marveled at the architecture, and the amazing view. One thing though…
<p align="center"><img src="./slides/slides.002.jpeg" width="640" /></p>

### There is a water leakage at the ceiling.
<p align="center"><img src="./slides/slides.003.jpeg" width="640" /></p>

### That was in June. Now here in December, yesterday my plane landed and it was raining. I checked, and no, they haven’t fixed it. Rain still leaks through the roof.
<p align="center"><img src="./slides/slides.004.jpeg" width="640" /></p>

### Not only there was a water leakage, but in June, [Monica Dinculescu](https://twitter.com/notwaldorf) [documented on Twitter that our `node_modules` also go there!](https://twitter.com/notwaldorf/status/1140336804026937344)
<p align="center"><img src="./slides/slides.005.jpeg" width="640" /></p>

### …so that’s the motivation behind this silly project. I want to create The Jewel Rain Vortex but it’s `node_modules` instead of water.
<p align="center"><img src="./slides/slides.006.jpeg" width="640" /></p>

### To do that, the first thing I need to do is to recreate the jewel.
<p align="center"><img src="./slides/slides.007.jpeg" width="640" /></p>

### Actually, I tried doing that once in June, but I did not have enough information to recreate it accurately, since I already went back to Thailand.
<p align="center"><img src="./slides/slides.008.jpeg" width="640" /></p>

### So this time when I arrived at Singapore…
<p align="center"><img src="./slides/slides.009.jpeg" width="640" /></p>

### …the first thing I did is I went to Jewel, and made a lot of observations about its structure, taking a lot of footages.
<p align="center"><img src="./slides/slides.010.jpeg" width="640" /></p>

### For example, I noted that the innermost ring has 24 vertices…
<p align="center"><img src="./slides/slides.011.jpeg" width="640" /></p>

### and that vertex spreads outwards into either 2 or 3 adjacent vertices in the next outer ring.
<p align="center"><img src="./slides/slides.012.jpeg" width="640" /></p>

### So, I opened up my notetaking app and took notes of the patterns.
<p align="center"><img src="./slides/slides.013.jpeg" width="640" /></p>

### But then, I realized that so much of the structure has been obstructed from my view. I don’t know how many rings there are.
<p align="center"><img src="./slides/slides.014.jpeg" width="640" /></p>

### I rode the shuttle train back-and-forth between Terminal 2 and Terminal 3, but still, I couldn’t figure out how many rings there are.
<p align="center"><img src="./slides/slides.015.jpeg" width="640" /></p>

### So I turned to the internet for help. It’s time for research.
<p align="center"><img src="./slides/slides.016.jpeg" width="640" /></p>

### I searched for “changi jewel architecture,” and to increase my chance of finding the right information, I added “pdf.”
<p align="center"><img src="./slides/slides.018.jpeg" width="640" /></p>

### It turns out that the Jewel is designed by Safdie Architects…
<p align="center"><img src="./slides/slides.019.jpeg" width="640" /></p>

### and they have an archive. Unfortunately, it was not very useful in my quest for answer.
<p align="center"><img src="./slides/slides.020.jpeg" width="640" /></p>

### I kept scrolling and I start finding [more detailed architecture images published online](https://archpaper.com/2019/11/safdie-architects-designed-changi-airport-jewel-is-enclosed-by-a-sprawling-toroidal-dome/cusersdfoxedocumentsskyg_a-01_dfoxe-pdf/).
<p align="center"><img src="./slides/slides.021.jpeg" width="640" /></p>

### I learned that [there are 43 rings in total](https://www.architecturalrecord.com/articles/14153-jewel-changi-airport-by-safdie-architects)…
<p align="center"><img src="./slides/slides.022.jpeg" width="640" /></p>

### and that [each side of the jewel differs in dimensions](https://modelo.io/blog/index.php/2016/06/06/design-manifestos-jaron-lubin-safdie-architects/).
<p align="center"><img src="./slides/slides.023.jpeg" width="640" /></p>

### I also learned that [OVER NINE THOUSAND](https://www.channelnewsasia.com/news/singapore/building-the-jewel-a-close-up-look-at-the-9-000-pieces-of-glass-10149674) glass panels are being used. However, as I take closer look, I found several mismatches between the models and the actual observations:
<p align="center"><img src="./slides/slides.024.jpeg" width="640" /></p>

### For example, the model did not have 24 vertices in the innermost ring, but much more.
<p align="center"><img src="./slides/slides.025.jpeg" width="640" /></p>

### The size proportion of the waterfall in reality is also different from the architect’s rendering.
<p align="center"><img src="./slides/slides.026.jpeg" width="640" /></p>

### And here it looks like something has been added in later.
<p align="center"><img src="./slides/slides.027.jpeg" width="640" /></p>

### At first I thought the innermost ring was the 43th…
<p align="center"><img src="./slides/slides.028.jpeg" width="640" /></p>

### but after looking at the vertex count, the size proportion, the spread-out pattern, and the ring border patterns, I have come to believe that 3 more rings has been added in afterwards.
<p align="center"><img src="./slides/slides.029.jpeg" width="640" /></p>

### …and that there are probably more like 46 rings.
<p align="center"><img src="./slides/slides.030.jpeg" width="640" /></p>

### Using this new information, I recreated the framing structure of the Jewel using THREE.js.
<p align="center"><img src="./slides/slides.031.jpeg" width="640" /></p>
<p align="center"><img src="./screenshots/demo1.png" width="640" /></p>

### Then I use the Chokidar file watching library to watch for changes to the filesystem.
<p align="center"><img src="./slides/slides.032.jpeg" width="640" /></p>

### These events are sent through socket.io to the webpage.
<p align="center"><img src="./slides/slides.033.jpeg" width="640" /></p>

### Now, if I run `touch hello`, I should see the filename falling down.
<p align="center"><img src="./screenshots/demo2.png" width="640" /></p>

### When I create a Git repository, here I see the internal Git files being created.

```sh
git init project
```

<p align="center"><img src="./screenshots/demo3.png" width="640" /></p>

### What if I Create a React App?

```sh
create-react-app test
```

<p align="center"><img src="./screenshots/demo4.png" width="640" /></p>

```
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
```

<p align="center"><img src="./screenshots/demo5.png" width="640" /></p>

### Now we can visualize and see what happens when you install npm packages using the Jewel vortex! That’s all from me, thank you!

<p align="center"><img src="./screenshots/demo6.png" width="640" /></p>
