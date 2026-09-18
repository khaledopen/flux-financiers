export const money = value => Math.round((Number(value) + Number.EPSILON) * 100) / 100;
export function forecast({ incomes, expenses, saved, target, monthsRemaining }) {
  const averageIncome = money(incomes.reduce((a,b)=>a+Number(b),0) / Math.max(incomes.length,1));
  const averageExpense = money(expenses.reduce((a,b)=>a+Number(b),0) / Math.max(expenses.length,1));
  const capacity = money(averageIncome-averageExpense);
  const remaining = Math.max(0,money(target-saved));
  const needed = monthsRemaining > 0 ? money(remaining/monthsRemaining) : remaining;
  const estimatedMonths = capacity > 0 ? Math.ceil(remaining/capacity) : null;
  const ratio = needed > 0 ? capacity/needed : Infinity;
  const status = ratio >= 1 ? 'realisable' : ratio >= .8 ? 'a_risque' : 'difficile';
  return { averageIncome, averageExpense, capacity, remaining, needed, estimatedMonths, status };
}
