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