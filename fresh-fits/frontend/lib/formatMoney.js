export default function(amount) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };
  // If its a whole, dollar amount, leave off the .00
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
}
