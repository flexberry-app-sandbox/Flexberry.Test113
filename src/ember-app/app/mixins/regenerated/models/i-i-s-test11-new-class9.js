import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  newClass10: DS.hasMany('i-i-s-test11-new-class10', { inverse: 'newClass9', async: false })
});

export let ValidationRules = {
  newClass10: {
    descriptionKey: 'models.i-i-s-test11-new-class9.validations.newClass10.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-test11-new-class8'
  });
};
