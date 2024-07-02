import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as NewClass2Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class2';

import NewClass3Model from './i-i-s-test11-new-class3';

let Model = NewClass3Model.extend(NewClass2Mixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
