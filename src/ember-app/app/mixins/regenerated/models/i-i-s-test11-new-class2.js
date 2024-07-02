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
  newClass1: DS.belongsTo('i-i-s-test11-new-class1', { inverse: null, async: false }),
  newClass4: DS.belongsTo('i-i-s-test11-new-class4', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-i-s-test11-new-class2.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-test11-new-class2.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-test11-new-class2.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-test11-new-class2.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  newClass1: {
    descriptionKey: 'models.i-i-s-test11-new-class2.validations.newClass1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  newClass4: {
    descriptionKey: 'models.i-i-s-test11-new-class2.validations.newClass4.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-test11-new-class3'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-test11-new-class2', {
    newClass1: belongsTo('i-i-s-test11-new-class1', 'New class1', {

    }, { index: 0 }),
    newClass4: belongsTo('i-i-s-test11-new-class4', 'New class4', {

    }, { index: 1 }),
    newClass5: belongsTo('i-i-s-test11-new-class5', 'New class5', {

    }, { index: 2 })
  });

  modelClass.defineProjection('NewClass2E', 'i-i-s-test11-new-class2', {
    newClass1: belongsTo('i-i-s-test11-new-class1', 'New class1', {

    }, { index: 0 }),
    newClass4: belongsTo('i-i-s-test11-new-class4', 'New class4', {

    }, { index: 1 }),
    newClass5: belongsTo('i-i-s-test11-new-class5', 'New class5', {

    }, { index: 2 })
  });

  modelClass.defineProjection('NewClass2L', 'i-i-s-test11-new-class2', {
    
  });
};
