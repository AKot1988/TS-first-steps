export default function secondPart(
  firstArray: number[],
  secondArray: number[]
): number[] {
  console.log('Hello from secondPart function');
  return [...firstArray, ...secondArray];
}
