import React, { Component } from 'react';
import { Breadcrumb, Icon } from '@alifd/next';
import styles from './Breadcrumb.module.scss';

export default class BreadcrumbNav extends Component {
  render() {
    return (
      <div className={styles.breadcrumbLayout}>
        <div className={styles.appInfo}>
          <span className={styles.groupName}>groupName</span>

          <span className={styles.appName}><Icon size="xs" type="arrow-double-right" />AppName</span>

          <span className={styles.mName}>:M2Client</span>

        </div>
        <Breadcrumb>
          <Breadcrumb.Item >xxx</Breadcrumb.Item>
          <Breadcrumb.Item >xxxx</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
