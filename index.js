const on = (element, animationName) => (eventName, handler) => {
  const isValidEventName = ['start', 'iteration', 'end'].indexOf(eventName) > -1;
  if (!isValidEventName) throw new Error(`${eventName} not supported`);

  const nativeEventName = `animation${eventName}`;

  element.addEventListener(nativeEventName, e => {
    const matches = animationName ? e.animationName === animationName : true;

    matches && handler(e);
  });

  return animotion(element, animationName);
};
const name = element => animationName => animotion(element, animationName);
const animotion = (element, animationName) => {
  return {
    on: on(element, animationName),
    name: name(element)
  }
};

module.exports = element => animotion(element);