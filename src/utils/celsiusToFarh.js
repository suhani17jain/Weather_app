export default function celsiusToFarh(value) 
{
  let temperature = value;
  const cToFahr = temperature * 9 / 5 + 32;
  return cToFahr;
}