(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const animotion = require('animotion');
const $ = id => document.getElementById(id);
const animatedElement = $('animated');
const statsEl = $('stats');
const statusEl = $('status');
const timeEl = $('time');
const iterationsEl = $('iterations');

let isRunning = true;
let elapsedTime = 0.0;
let iterationCount = 0;

const start = () => {
  console.log('start');
  statusEl.innerText = 'Status: running';
};

const iteration = () => {
  iterationCount++;

  console.log('iteration', iterationCount);

  iterationsEl.innerText = `Iterations: ${iterationCount}`;
};

const end = () => {
  console.log('end');

  statusEl.innerText = 'Status: stoped';
};

const toggle = () => {
  isRunning = !isRunning;

  // statusEl.innerText = 'Status: ' + (isRunning ? 'running' : 'stoped');

  animatedElement.classList.toggle('stoped');
};

const updateTime = () => {
  if (isRunning) {
    elapsedTime += 0.1;

    timeEl.innerText = `Slapsed time: ${elapsedTime.toFixed(1)}s`;
  }

  setTimeout(updateTime, 100);
};


$('toggle').addEventListener('click', toggle);

animotion(animatedElement)
  .on('start', start)
  .on('iteration', iteration)
  .on('end', end)

updateTime();
},{"animotion":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
