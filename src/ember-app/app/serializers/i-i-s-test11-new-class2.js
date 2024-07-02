import { Serializer as NewClass2Serializer } from
  '../mixins/regenerated/serializers/i-i-s-test11-new-class2';
import NewClass3Serializer from './i-i-s-test11-new-class3';

export default NewClass3Serializer.extend(NewClass2Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
