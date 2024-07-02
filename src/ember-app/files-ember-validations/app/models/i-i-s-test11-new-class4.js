import {
  defineNamespace,
  defineProjections,
  Model as NewClass4Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class4';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, NewClass4Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
