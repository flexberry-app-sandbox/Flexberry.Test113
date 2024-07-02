import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as NewClass2Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class2';

import NewClass3Model from './i-i-s-test11-new-class3';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-test11-new-class3';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = NewClass3Model.extend(NewClass2Mixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
