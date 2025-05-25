import * as fs from 'fs';
import * as path from 'path';
import { calculateTruckSchedule, ScheduleInput } from './truck-scheduler';

function loadInput(filePath: string): ScheduleInput {
  const inputData = fs.readFileSync(path.resolve(filePath), 'utf-8');
  return JSON.parse(inputData) as ScheduleInput;
}

function main() {
  const inputFile = process.argv[2] || 'input.json';
  const input = loadInput(inputFile);

  const trucks = calculateTruckSchedule(
    input.daysInMonth,
    input.tripDuration,
    input.maintenanceDuration
  );

  for (const truck of trucks) {
    console.log(`Truck ${truck.id}: ${truck.schedule.join(', ')}`);
  }

  console.log(`\nTOTAL Trucks: ${trucks.length}`);
}

main();
