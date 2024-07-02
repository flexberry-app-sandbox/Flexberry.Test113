import {
  defineNamespace,
  defineProjections,
  Model as NewClass5Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class5';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, NewClass5Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
