import {
  defineNamespace,
  Model as NewClass8Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class8';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, NewClass8Mixin, {
});

defineNamespace(Model);

export default Model;
