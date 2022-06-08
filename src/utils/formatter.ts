export function tickFormatter(value: any) {
  if (value < 1000) return value;
  if (value < 1000000) 
    return (value / 1000).toFixed(1) + "K";
  return (value / 1000000).toFixed(1) + "M";
}