import app from '../src/application'
import * as request from 'supertest';

describe('The endpoint returns events', () => {
  it('Fetch the GET=> /all_events endpoint', async () => {
    await request(app)
      .get('/all_events')
      .expect(200)
      .expect(function(res) {
        expect(res.body.message).toContain("Records fetched successfully")
        expect(res.body.events.length).toBeGreaterThan(100)
      });
  })
});

describe('The endpoint returns events', () => {
  it('Fetch the POST=> /single_recipient_events endpoint', async () => {
    await request(app)
      .post('/single_recipient_events')
      .send({
        "care_recipient_id":"df50cac5-293c-490d-a06c-ee26796f850d"  
      })
      .expect(200)
      .expect(function(res) {
        expect(res.body.message).toContain("Records fetched successfully")
        expect(res.body.events.length).toBeGreaterThan(100)
      });
  })
});
