import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editor: DS.attr('string'),
  editTime: DS.attr('date'),
  newClass5: DS.belongsTo('i-i-s-test11-new-class5', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-test11-new-class3.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-test11-new-class3.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-test11-new-class3.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-test11-new-class3.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  newClass5: {
    descriptionKey: 'models.i-i-s-test11-new-class3.validations.newClass5.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-test11-new-class3', {
    newClass5: belongsTo('i-i-s-test11-new-class5', 'New class5', {

    }, { index: 0 })
  });

  modelClass.defineProjection('NewClass3E', 'i-i-s-test11-new-class3', {
    newClass5: belongsTo('i-i-s-test11-new-class5', 'New class5', {

    }, { index: 0 })
  });

  modelClass.defineProjection('NewClass3L', 'i-i-s-test11-new-class3', {
    
  });
};
