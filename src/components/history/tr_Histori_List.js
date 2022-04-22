import PropTypes from 'prop-types';

import TransactionString from './tr_Histori';
import s from './tr_Histori.module.css';

export default function Transaction({ data }) {
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
        {data.map(el => {
          return (
            <TransactionString
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionString.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
