import React from 'react';
import styles from './styles.css';
import { Filter } from './../../../components';

function HomeFilter(props) {
  const {
    filters,
    clients,
    engineers,
    vendors,
    products,
    onFilterCases,
    onResetFilters,
  } = props;

  return (
    <div>
      <Filter
        onFilterCases={onFilterCases}
        onResetFilters={onResetFilters}
        filters={filters}
        clients={clients}
        engineers={engineers}
        vendors={vendors}
        products={products}
      />
    </div>
  );
}

HomeFilter.propTypes = {};

export default HomeFilter;
