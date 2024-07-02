import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  newClass9: DS.belongsTo('i-i-s-test11-new-class9', { inverse: 'newClass10', async: false })
});

export let ValidationRules = {
  newClass9: {
    descriptionKey: 'models.i-i-s-test11-new-class10.validations.newClass9.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
