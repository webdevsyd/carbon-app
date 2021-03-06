import React from 'react';
import moment from 'moment';

import styles from './styles.css';
import { Table, Link, Status, Avatar } from './../../../components';
import { getSeverityValue } from './../../../utils/data';

function HomeTable(props) {
  const columns = [{
    title: 'ID',
    dataIndex: 'glocalid',
    sorter: (a, b) => a.glocalid - b.glocalid,
    render: glocalid => <Link to={`/cases/${glocalid}`}>{glocalid}</Link>,
  }, {
    title: 'Company',
    dataIndex: 'customer',
    sorter: (a, b) => a.customer.length - b.customer.length,
  }, {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.length - b.status.length,
    render: status => <Status type={status} />,
  }, {
    title: 'Severity',
    dataIndex: 'severity',
    sorter: (a, b) => a.severity - b.severity,
    render: severity => getSeverityValue(severity),
  }, {
    title: 'Case Title',
    dataIndex: 'casetitle',
    sorter: (a, b) => a.casetitle.length - b.casetitle.length,
  }, {
    title: 'Product',
    dataIndex: 'productname',
    sorter: (a, b) => a.productname.length - b.productname.length,
  }, {
    title: 'Open',
    dataIndex: 'open',
    sorter: (a, b) => Math.abs(moment(a.open).diff(moment(), 'days')) - Math.abs(moment(b.open).diff(moment(), 'days')),
    render: date => `${Math.abs(moment(date).diff(moment(), 'days'))} days`,
  }, {
    title: 'Last Updated',
    dataIndex: 'lastupdated',
    sorter: (a, b) => moment(a.lastupdated, 'YYYY-MM-DD').diff(moment(b.lastupdated, 'YYYY-MM-DD')),
    render: date => moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
  }, {
    title: 'Actions',
    dataIndex: 'actions',
    render: (text, record) => (
      <div>
        <Link to={`/cases/${record.glocalid}`}>{text[0]} </Link>
        <Link to={`/cases/${record.glocalid}/edit`}>{text[1]}</Link>
      </div>
    ),
  }];

  const dataSource = props.data.map((item, index) => {
    return {
      key: index,
      glocalid: item.glocalId,
      customer: item.customer,
      status: item.case_status,
      severity: item.severity,
      casetitle: item.caseTitle,
      productname: item.productName,
      open: item.dateRaised,
      lastupdated: item.date_last_updated || item.dateRaised,
      dateraised: item.dateRaised,
      actions: ['View', 'Edit'],
    };
  });

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}

HomeTable.propTypes = {};

export default HomeTable;
