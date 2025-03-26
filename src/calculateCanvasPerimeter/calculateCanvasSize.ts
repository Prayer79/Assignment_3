export default function calculateCanvasSize(length: string, width: string) {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  return l * w;
}
