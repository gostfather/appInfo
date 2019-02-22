import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import MainRoutes from './MainRoutes';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Asdie from './components/Aside';
import Footer from './components/Footer';
import styles from './BasicLayout.module.scss';

export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout className={styles.iceLayout}>
        <Header />
        <Breadcrumb />
        <Layout.Section className={styles.iceLayoutSection}>
          <Layout.Aside>
            <Asdie />
          </Layout.Aside>

          <Layout.Main className={styles.iceLayoutMain} scrollable>
            <MainRoutes />
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}
