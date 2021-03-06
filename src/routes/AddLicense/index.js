import React, { Component } from 'react';
import { connect } from 'dva';

import styles from './styles.css';
import AddLicenseHeader from './AddLicenseHeader';
import AddLicenseForm from './AddLicenseForm';

class AddLicense extends Component {
  componentDidMount() {
    const {
      dispatch,
    } = this.props;

    dispatch({ type: 'vendors/FETCH_VENDORS' });
    dispatch({ type: 'products/FETCH_PRODUCTS' });
    dispatch({ type: 'clients/FETCH_CLIENTS' });
  }

  render() {
    const {
      dispatch,
      loading,
      vendors,
      products,
      clients,
    } = this.props;

    if (
      !vendors.length ||
      !products.length ||
      !clients.length
    ) return null;

    return (
      <div className={styles.addLicenseHeader}>
        <AddLicenseHeader />
        <AddLicenseForm
          loading={loading}
          vendors={vendors}
          products={products}
          clients={clients}
          onSelectVendor={data => dispatch({ type: 'products/FETCH_PRODUCTS_OF_VENDOR', payload: data })}
          onSave={data => dispatch({ type: 'licenses/ADD_LICENSE', payload: data })}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading.effects['licenses/ADD_LICENSE'],
    vendors: state.vendors.data,
    clients: state.clients.data,
    products: state.products.data,
  };
}

AddLicense.propTypes = {};

export default connect(mapStateToProps)(AddLicense);