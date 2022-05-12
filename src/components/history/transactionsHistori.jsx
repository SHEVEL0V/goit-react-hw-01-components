import PropTypes from 'prop-types';
import String from './transactionEl';
import s from './transition.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <String key={id} type={type} amount={amount} currency={currency} />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf({ id: PropTypes.number }).isRequired,
};
