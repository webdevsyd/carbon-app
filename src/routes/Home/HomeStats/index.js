import React from 'react';
// import PropTypes from 'prop-types';

import { Col, Row, Progress } from 'antd';

import { Typography, Link, Card, Button } from './../../../components';

import styles from './styles.css';

const { H1, H2, H3, H4 } = Typography;

function HomeStats(props) {
  return (
    <div>
      <Card style={{ marginBottom: '20px' }}>
        <Row type="flex" justify="center">
          <Progress
            style={{ marginBottom: '30px' }}
            strokeWidth={4}
            width={208}
            type="circle"
            percent={24}
            format={
              (percent) => {
                return (
                  <Row>
                    <Row>
                      <H1>{percent}</H1>
                    </Row>
                    <Row>
                      <H4>RESOLVED CASES</H4>
                    </Row>
                  </Row>
                );
              }
            }
          />
        </Row>
        <Row gutter={16} type="flex" justify="center">
          <Col span={12} className={styles.verticalLine}>
            <Row type="flex" justify="center">
              <H2>76</H2>
            </Row>
            <Row type="flex" justify="center">
              <H4>OPEN CASES</H4>
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="center">
              <H2>100</H2>
            </Row>
            <Row type="flex" justify="center">
              <H4>TOTAL CASES</H4>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card style={{ marginBottom: '20px' }}>
        <Row>
          <H1>16</H1>
        </Row>
        <Row>
          <H3>CASES OVERDUE</H3>
        </Row>
        <div className={styles.horizontalLine} />
        <Row type="flex" justify="end">
          <Link to="/">View More</Link>
        </Row>
      </Card>
      <Card style={{ marginBottom: '20px' }}>
        <Row>
          <H1>12</H1>
        </Row>
        <Row>
          <H3>CASES RESOLVED THIS WEEK</H3>
        </Row>
        <div className={styles.horizontalLine} />
        <Row type="flex" justify="end">
          <Link to="/">View More</Link>
        </Row>
      </Card>
    </div>
  );
}

HomeStats.propTypes = {};

export default HomeStats;