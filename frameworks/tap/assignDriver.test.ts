import esmock from 'esmock';
import { describe, it } from 'node:test';
import assert from 'node:assert';

// TODO: complete test
describe('Assign driver behaviour', () => {
  it('should assign a Ferrari to Schumacher', async () => {
    const Driver = await esmock('../../src/models/Driver.ts', {
      '../../src/connectors/driversConnector': {
        getAllDrivers: () => [{
          id: 333,
          name: 'Schumacher',
          contract: 'Ferrari',
        }],
      },
    });

    const driver = await Driver.get(333);
    assert.strictEqual(driver?.id, 333);
  });
});
