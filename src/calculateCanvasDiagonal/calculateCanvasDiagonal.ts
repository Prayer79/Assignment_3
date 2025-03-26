export default function calculateCanvasDiagonal(length: string, width: string) {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  return Math.sqrt(l * l + w * w);
}
