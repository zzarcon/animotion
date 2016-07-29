const animotion = require('../../index');
const assert = require('chai').assert;

module.exports = _ => {
  describe('Animotion', function() { 
    beforeEach(function() {
      const fixtures = document.getElementById('fixtures');

      fixtures.innerHTML = '<div id="animated-div"></div>';
    });   

    it('Should fire the event handlers', function(done) {
      const element = document.getElementById('animated-div');
      const start = _ => assert(true, '"start" event is fired');
      const end = _ => {
        assert(true, '"end" event is fired');
        done();
      };

      animotion(element)
        .on('start', start)
        .on('end', end)  
    });
    it('You can filter by "animation name"', function(done) {
      const element = document.getElementById('animated-div');
      const fail = _ => assert.fail('Handles a wrong animation name');
      const end = _ => {
        assert(true, '"end" event is fired for the right animation name');
        done();
      };

      animotion(element)
        .name('func')
        .on('start', fail)

      animotion(element)
        .name('foo')
        .on('end', end)

    });
    it('Returns an AnimationEvent object in the handler', function(done) {
      const element = document.getElementById('animated-div');
      const start = e => {
        assert.instanceOf(e, AnimationEvent, 'An AnimationEvent is returned')
        done();
      };

      animotion(element)
        .on('start', start);

    });
  });
}