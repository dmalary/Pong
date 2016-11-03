# Pong
###### 2 Player-Pong


### Deployment flow

1. Create development branch
  - from master
    - git checkout -b development
2. Pull @ beginning of day
  - from development
    - git pull origin master
    - (npm install) if needed
3. Create 1 branch per file feature
  - from development
    - git checkout -b file_feature
4. By end of day
  - from branch
    - git add .
    - git commit -m "update details"
    - git push origin file_feature
    - gitHub: Pull request
    - git checkout development
  - from development
    - gitHub: Pull request
    - git branch -d branch_name

---

### Links

- Game templates
  - [Pong 1](https://robots.thoughtbot.com/pong-clone-in-javascript#getting-started)
  - [Pong 2](http://codeincomplete.com/posts/javascript-pong/)
- [Game Color palettes](http://www.color-hex.com/color-palettes/)
  - [Final palette](http://www.color-hex.com/color-palette/25496)
- [Game field?](http://www.newenglandsealcoating.com/images/tennis-court-dimensions2.gif)

- Concepts
  - [JS prototype object](http://www.javascriptkit.com/javatutors/proto.shtml)
  - [HMTL Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
  - [Animation Frame method](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  - [2d context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

---

### Functions and objects

#### Objects:
- paddle blueprint
- player
  - paddle 1
  - paddle 2
- players in game (pvc, pvp, cvc)
- computer
  - paddle 1
  - paddle 2
- ball
  - ball 2, 3, 4?

#### Functions
- Game run
- Ball collision
- Match track
- Computer AI
