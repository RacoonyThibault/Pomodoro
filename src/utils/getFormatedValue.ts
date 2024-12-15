export function getFormatedValue(time: number): string {
  const rawMinutes = Math.trunc(time / 60);
  const rawSeconds = time % 60;

  const minutes = rawMinutes < 10 ? `0${rawMinutes}` : `${rawMinutes}`;
  const seconds = rawSeconds < 10 ? `0${rawSeconds}` : `${rawSeconds}`;
  return `${minutes}:${seconds}`;
}
