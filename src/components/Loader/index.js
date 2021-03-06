import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

const Loader = ({ spinning, fullScreen }) => {
  const loaderStyle = classNames(
    styles.loader,
    {
      [styles.hidden]: !spinning,
      [styles.fullScreen]: fullScreen,
    },
  );

  return (
    <div className={loaderStyle}>
      <div className={styles.wrapper}>
        <div className={styles.inner} />
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  );
};


Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Loader;
