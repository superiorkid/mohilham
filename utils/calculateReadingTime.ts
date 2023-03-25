export default function calculateReadingTime(body: string) {
  const wordTotal: number = body.split(" ").filter((num) => {
    return num != "";
  }).length;
  return wordTotal / 200;
}
