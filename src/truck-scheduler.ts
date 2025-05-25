export type Truck = {
  id: number;
  isOdd: boolean;
  nextAvailableDay: number;
  schedule: number[];
};

export type ScheduleInput = {
  daysInMonth: number;
  tripDuration: number;
  maintenanceDuration: number;
};

export function calculateTruckSchedule(
  daysInMonth: number,
  tripDuration: number,
  maintenanceDuration: number
): Truck[] {
  const trucks: Truck[] = [];
  const totalDowntime = tripDuration + maintenanceDuration;

  for (let day = 1; day <= daysInMonth; day++) {
    let assigned = false;

    for (const truck of trucks) {
      const isTruckDay = truck.isOdd ? day % 2 === 1 : day % 2 === 0;

      if (isTruckDay && truck.nextAvailableDay <= day) {
        truck.schedule.push(day);
        truck.nextAvailableDay = day + totalDowntime;
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      const newTruckId = trucks.length + 1;
      const isOdd = newTruckId % 2 === 1;

      trucks.push({
        id: newTruckId,
        isOdd,
        nextAvailableDay: day + totalDowntime,
        schedule: [day],
      });
    }
  }

  return trucks;
}
