export default function TransactionString({
  amount,
  currency,
  type,
}) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
