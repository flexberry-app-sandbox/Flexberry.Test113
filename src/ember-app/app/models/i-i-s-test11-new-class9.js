import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  ValidationRules,
  Model as NewClass9Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class9';

import NewClass8Model from './i-i-s-test11-new-class8';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-test11-new-class8';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = NewClass8Model.extend(NewClass9Mixin, Validations, {
});

defineBaseModel(Model);

export default Model;
