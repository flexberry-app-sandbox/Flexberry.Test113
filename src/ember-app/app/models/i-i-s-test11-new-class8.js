import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

import {
  ValidationRules,
  Model as NewClass8Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class8';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, NewClass8Mixin, Validations, {
});

export default Model;
