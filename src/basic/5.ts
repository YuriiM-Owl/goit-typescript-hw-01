enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) return true;
  return false;
};
console.log("---------------------5 task------------------");
console.log(isWeekend(0));
console.log(isWeekend(6));
