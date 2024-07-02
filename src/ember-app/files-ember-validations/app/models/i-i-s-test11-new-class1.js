import {
  defineNamespace,
  defineProjections,
  Model as NewClass1Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class1';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, NewClass1Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
