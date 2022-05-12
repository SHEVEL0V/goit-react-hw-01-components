import PropTypes from 'prop-types'

export default function String({
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


String.propTypes ={
  amount:PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}