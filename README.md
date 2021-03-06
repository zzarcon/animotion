#Animotion
> Subscribe to element animation events in a declarative way [DEMO](https://zzarcon.github.io/animotion/)

<img src="http://babysimpson.co.uk/gallery/frames/12/babf22/59.jpg" width="173">
<img src="https://media.giphy.com/media/l0HlOdjc6zBE06Xv2/giphy.gif" width="190">

##Usage

Having the following CSS
```css
#animated-div{
  border: 1px solid;
  width: 1px;
  height: 1px;
  animation: foo 2s infinite;
}

@keyframes foo {
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
```

###Listen for events

```javascript
const animotion = require('animotion');
const div = document.getElementById('animated-div');

let iterationCount;

const start = _ => {console.log(`Element started animation at ${new Date()}`)};
const iteration = _ => {console.log(`Element iteration: ${iterationCount++}`)};
const end = _ => {console.log(`Element finished animation at ${new Date()}`)};

animotion(div)
  .on('start', start)
  .on('iteration', iteration)
  .on('end', end)
```

###Filter by animation name
This could be useful if you add/remove classes that involve animations in the same element and you want to react different to them:

```javascript
//The start event will not be called because the animation name is different
animotion(div)
  .name('bar')
  .on('start', start)

//Events are called because the animation name matches
animotion(div)
  .name('foo')
  .on('start', start)
  .on('end', end)
```

###Demo
Tracking animation status, slapsed time and iteration number with Animotion

<img src="https://media.giphy.com/media/l0HlOdjc6zBE06Xv2/giphy.gif" width="545">

https://zzarcon.github.io/animotion/

###Installation

```
$ npm i animotion -S
```
###Author

[@zzarcon](https://twitter.com/zzarcon) :rocket: