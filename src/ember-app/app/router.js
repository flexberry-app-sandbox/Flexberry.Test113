import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test11-new-class1-l');
  this.route('i-i-s-test11-new-class1-e',
  { path: 'i-i-s-test11-new-class1-e/:id' });
  this.route('i-i-s-test11-new-class1-e.new',
  { path: 'i-i-s-test11-new-class1-e/new' });
  this.route('i-i-s-test11-new-class2-l');
  this.route('i-i-s-test11-new-class2-e',
  { path: 'i-i-s-test11-new-class2-e/:id' });
  this.route('i-i-s-test11-new-class2-e.new',
  { path: 'i-i-s-test11-new-class2-e/new' });
  this.route('i-i-s-test11-new-class3-l');
  this.route('i-i-s-test11-new-class3-e',
  { path: 'i-i-s-test11-new-class3-e/:id' });
  this.route('i-i-s-test11-new-class3-e.new',
  { path: 'i-i-s-test11-new-class3-e/new' });
  this.route('i-i-s-test11-new-class4-l');
  this.route('i-i-s-test11-new-class4-e',
  { path: 'i-i-s-test11-new-class4-e/:id' });
  this.route('i-i-s-test11-new-class4-e.new',
  { path: 'i-i-s-test11-new-class4-e/new' });
  this.route('i-i-s-test11-new-class5-l');
  this.route('i-i-s-test11-new-class5-e',
  { path: 'i-i-s-test11-new-class5-e/:id' });
  this.route('i-i-s-test11-new-class5-e.new',
  { path: 'i-i-s-test11-new-class5-e/new' });
  this.route('i-i-s-test11-new-class6-l');
  this.route('i-i-s-test11-new-class6-e',
  { path: 'i-i-s-test11-new-class6-e/:id' });
  this.route('i-i-s-test11-new-class6-e.new',
  { path: 'i-i-s-test11-new-class6-e/new' });
  this.route('i-i-s-test11-new-class7-l');
  this.route('i-i-s-test11-new-class7-e',
  { path: 'i-i-s-test11-new-class7-e/:id' });
  this.route('i-i-s-test11-new-class7-e.new',
  { path: 'i-i-s-test11-new-class7-e/new' });
});

export default Router;
