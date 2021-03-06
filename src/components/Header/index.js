import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './styles.css';

import { H5 } from './../Typography';
import Button from './../Button';
import Avatar from './../Avatar';
import Link from './../Link';
import Search from './../Search';

const AntHeader = Layout.Header;

const Header = (props) => {
  const {
    pathname,
    onSearchCases,
  } = props;

  const getHeaderTitle = (path) => {
    if (path === '/home') return 'Home';

    if (path === '/cases/all') return <Search onTextChange={text => onSearchCases(text)} />;
    if (path === '/cases/add') return 'Cases';

    if (path.includes('/activities')) return 'Activity';
    if (path.includes('/cases/')) return 'View Case';

    if (path === '/vendors/edit') return 'Vendor';
    if (path === '/products/edit') return 'Product';

    if (path.includes('/clients')) return 'Client';

    if (path.includes('licenses')) return 'License';

    return '';
  };

  const getHeaderButtonLink = (path) => {
    if (path === '/home') return '/cases/add';

    if (path === '/cases/all') return '/cases/add';
    if (path === '/cases/add') return '/cases/add';

    if (path.includes('/activities')) return '/cases/add';
    if (path.includes('/cases/')) return `${path}/activities/add`

    if (path === '/vendors/edit') return '/cases/add';
    if (path === '/products/edit') return '/cases/add';

    if (path.includes('/clients')) return '/cases/add';

    if (path.includes('licenses')) return '/cases/add';

    return '';
  };

  const getHeaderButtonText = (path) => {
    if (path === '/home') return 'New Case';

    if (path === '/cases/all') return 'New Case';
    if (path === '/cases/add') return 'New Case';

    if (path.includes('/activities')) return 'New Case';
    if (path.includes('/cases/')) return 'New Activity';

    if (path === '/vendors/edit') return 'New Case';
    if (path === '/products/edit') return 'New Case';

    if (path.includes('/clients')) return 'New Case';

    if (path.includes('licenses')) return 'New Case';

    return '';
  };

  return (
    <AntHeader className={styles.header}>
      <div className={styles.headerTitle}>
        <H5>{getHeaderTitle(pathname)}</H5>
      </div>
      <div>
        <div className={styles.headerButton}>
          <Link to={getHeaderButtonLink(pathname)}>
            <Button>{getHeaderButtonText(pathname)}</Button>

          </Link>
          <Link to="/logout">
            <Button style={{ marginLeft: '5px' }}><Icon type="logout" /> Logout</Button>
          </Link>
        </div>
        <span className={styles.headerAvatar}>
          <Avatar>A</Avatar>
        </span>
      </div>
    </AntHeader>
  );
};

export default Header;
