import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test11-new-class2', 'Unit | Serializer | i-i-s-test11-new-class2', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test11-new-class2',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test11-new-class1',
    'model:i-i-s-test11-new-class10',
    'model:i-i-s-test11-new-class2',
    'model:i-i-s-test11-new-class3',
    'model:i-i-s-test11-new-class4',
    'model:i-i-s-test11-new-class5',
    'model:i-i-s-test11-new-class6',
    'model:i-i-s-test11-new-class7',
    'model:i-i-s-test11-new-class8',
    'model:i-i-s-test11-new-class9',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
