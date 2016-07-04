import Ember from 'ember';

export default Ember.Controller.extend({
    init() {
        Ember.run.later(() => {
            this.set('codeBlock', 'function(){}');
        }, 5000)
    }
});
