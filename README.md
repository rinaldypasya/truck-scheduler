# 🚚 Truck Scheduler (Take Home Test – Backend Engineer)

This project solves a logistics optimization problem: **"How many trucks are needed to perform daily deliveries most efficiently in a month, under given constraints?"**

---

## 📌 Problem Summary

You need to find the minimum number of trucks required to make **one delivery per day**, considering the following rules:

- ✅ Each truck needs `tripDuration` days to complete a delivery.
- 🛠 Each truck needs `maintenanceDuration` days before it's available again.
- 📆 Trucks can only operate on **odd or even days** based on their truck ID:
  - Truck 1, 3, 5, ... → Odd days only
  - Truck 2, 4, 6, ... → Even days only

---

## 📁 Project Structure

```
truck-scheduler/
├── input.json                  # Input configuration
├── package.json
├── tsconfig.json
├── jest.config.js
├── src/
│   ├── schedule.ts             # CLI entry point to run scheduler
│   ├── truck-scheduler.ts      # Scheduling logic module
├── tests/
│   └── truck-scheduler.test.ts # Unit tests using Jest
```

---

## 📦 Installation

```bash
git clone <repo-url>
cd truck-scheduler
npm install
```

---

## 🚀 Run the Scheduler

Update `input.json` with your desired parameters:

```json
{
  "daysInMonth": 30,
  "tripDuration": 3,
  "maintenanceDuration": 1
}
```

Run:

```bash
npm start
```

Or:

```bash
npx ts-node src/schedule.ts input.json
```

📤 Output:

```
Truck 1: 1, 5, 9, 13, ...
Truck 2: 2, 6, 10, 14, ...
...
TOTAL Trucks: 4
```

---

## 🧪 Run Tests

This project uses [Jest](https://jestjs.io/) for testing.

```bash
npm test
```

Tests cover:
- Correct delivery counts
- Proper downtime intervals
- Odd/even truck scheduling
- Flexibility for different durations

---

## 🧩 Customize Durations

You can easily test different scenarios by editing `input.json`:

```json
{
  "daysInMonth": 30,
  "tripDuration": 2,
  "maintenanceDuration": 2
}
```

---

## 🛠 Built With

- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)
- [Jest](https://jestjs.io/)

---

## 📄 License

This project is for assessment and learning purposes.