import assert from 'node:assert';
import tap from 'tap';
import Driver from '../../src/models/Driver.js';

tap.mock('../../src/models/Driver', {
  '../../src/connectors/driversConnector': {
    getAllDrivers: () => [{
      id: 333,
      name: 'Schumacher',
      contract: 'Ferrari',
    }],
  },
});
tap.test('should mock driverConnector module', async () => {
  const driver = await Driver.get(333);
  assert.strictEqual(driver?.id, 333);
});
