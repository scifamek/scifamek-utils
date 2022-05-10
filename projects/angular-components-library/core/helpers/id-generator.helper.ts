export function randomId(): string {
  const currentId = Math.random() * 10000 - 100;
  return currentId.toString();
}
