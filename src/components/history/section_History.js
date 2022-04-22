import PropTypes from 'prop-types';

import data from '../json/transactions.json';
import Transaction from './tr_Histori_List';

export default function SectionTransaction() {
  return <Transaction data={data} />;
}

Transaction.propTypes = {
  data: PropTypes.array.isRequired,
};
