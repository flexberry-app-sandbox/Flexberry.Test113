import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

import {
  ValidationRules,
  Model as NewClass10Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class10';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, NewClass10Mixin, Validations, {
});

export default Model;
