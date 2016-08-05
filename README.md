#Animotion
> Subscribe to element animation events in a declarative way

<img src="http://babysimpson.co.uk/gallery/frames/12/babf22/59.jpg" width="173">

##Usage

Having the following CSS
```css
#animated-div{
  border: 1px solid;
  width: 1px;
  height: 1px;
  animation: foo .5s;
}

@keyframes foo {
  0%{
    transform: translateX(0);
  }
  100% {
    transform: translateX(5px);
  }
}
```

###Listen for events

```javascript
const animotion = require('animotion');
const div = document.getElementById('animated-div');

const start = _ => {console.log(`Element started animation at ${new Date()}`)};
const iteration = _ => {console.log(`Element started animation at ${new Date()}`)};
const end = _ => {console.log(`Element finished animation at ${new Date()}`)};

animotion(div)
  .on('start', start)
  .on('iteration', iteration)
  .on('end', end)
```

###Filter by animation name
This could be useful if you add/remove classes that involve animations to the same element and you want to react different to them:

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

###Author

[@zzarcon](https://twitter.com/zzarcon) :rocket: