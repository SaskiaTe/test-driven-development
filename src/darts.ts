export function calcPoints(hits: string): number {
  if (!hits) return 0;

  const tokens = hits.split(' ').map(Number);
  let score = 0;

  for (let i = 0; i < tokens.length - 1; i += 2) {
    const multiplier = tokens[i];
    const value = tokens[i + 1];

    if (![1, 2, 3].includes(multiplier)) continue;

    if (value < 1 || value > 20) continue;

    score += multiplier * value;
  }

  return score;
}

export function possibleCheckout(x: number): string | null {
  const remaining = 501 - x;

  if (remaining <= 0) return null;
  if (remaining % 2 !== 0) return null;

  const doubleTarget = remaining / 2;

  if (doubleTarget >= 1 && doubleTarget <= 20) {
    return `Double ${doubleTarget}`;
  }

  return null;
}
