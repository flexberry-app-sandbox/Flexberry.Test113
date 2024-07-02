import {
  defineNamespace,
  defineBaseModel,
  Model as NewClass9Mixin
} from '../mixins/regenerated/models/i-i-s-test11-new-class9';

import NewClass8Model from './i-i-s-test11-new-class8';

let Model = NewClass8Model.extend(NewClass9Mixin, {
});

defineNamespace(Model);
defineBaseModel(Model);

export default Model;
