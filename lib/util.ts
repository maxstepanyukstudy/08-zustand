export function formatDate(date: Date): string {
  const minutes = date.getMinutes();
  const minutesFormat = minutes < 10 ? "0" + minutes : minutes;

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${minutesFormat}`;
}

export function capitalizeOnlyFirstLetter(text: string): string {
  const first = text.charAt(0).toUpperCase();
  const rest = text.slice(1).toLocaleLowerCase();
  return first + rest;
}
