import React from 'react';
import styles from './styles.css';
import { Table, Link, Status } from './../../../../components';

function HomeTable(props) {
  const columns = [{
    title: 'Glo-cal ID',
    dataIndex: 'vendorcaseid',
    render: vendorcaseid => <Link to="/">{vendorcaseid}</Link>,
  }, {
    title: 'Company',
    dataIndex: 'customer',
  }, {
    title: 'Status',
    dataIndex: 'status',
    render: status => <Status type={status} />,
  }, {
    title: 'Assigned SE',
    dataIndex: 'assignedsystemsengineer',
    render: assignedsystemsengineer => {
      return assignedsystemsengineer.map((systemengineer) => {
        return (<div>A</div>)
      });
    },
  }, {
    title: 'Severity',
    dataIndex: 'severity',
  }, {
    title: 'Case Title',
    dataIndex: 'casetitle',
  }, {
    title: 'Product',
    dataIndex: 'productname',
  }, {
    title: 'Open',
    dataIndex: 'open',
  }, {
    title: 'Last Updated',
    dataIndex: 'lastupdated',
  }, {
    title: 'Date Raised',
    dataIndex: 'dateraised',
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
    return (
      {
        key: index,
        glocalid: item.glocalid,
        vendorcaseid: item.vendorcaseid,
        customer: item.customer,
        status: 'overdue',
        assignedsystemsengineer: item.assignedsystemsengineer,
        severity: item.severity,
        casetitle: item.casetitle,
        productname: item.productname,
        open: '3 days ago',
        lastupdated: item.dateraised,
        dateraised: item.dateraised,
        actions: ['View', 'Edit'],
      }
    );
  })

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