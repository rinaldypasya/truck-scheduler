import { calculateTruckSchedule } from '../src/truck-scheduler';

describe('Truck Scheduler', () => {
  it('should generate 30 deliveries with correct constraints', () => {
    const trucks = calculateTruckSchedule(30, 3, 1);
    const totalDeliveries = trucks.reduce((sum, t) => sum + t.schedule.length, 0);
    expect(totalDeliveries).toBe(30);

    for (const truck of trucks) {
      for (let i = 1; i < truck.schedule.length; i++) {
        const diff = truck.schedule[i] - truck.schedule[i - 1];
        expect(diff).toBeGreaterThanOrEqual(4);
      }
      for (const day of truck.schedule) {
        expect((day % 2 === 1) === truck.isOdd).toBe(true);
      }
    }
  });

  it('should adapt to different durations', () => {
    const trucks = calculateTruckSchedule(30, 2, 2);
    const totalDeliveries = trucks.reduce((sum, t) => sum + t.schedule.length, 0);
    expect(totalDeliveries).toBe(30);
  });

  it('should need fewer trucks with minimal downtime', () => {
    const trucks = calculateTruckSchedule(10, 1, 1);
    const totalDeliveries = trucks.reduce((sum, t) => sum + t.schedule.length, 0);
    expect(totalDeliveries).toBe(10);
    expect(trucks.length).toBeLessThanOrEqual(3);
  });
});
