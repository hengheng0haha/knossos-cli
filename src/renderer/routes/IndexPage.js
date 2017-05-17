import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'dva/router';
import MainLayout from '../components/Layout/MainLayout';



class IndexPage extends React.Component {
  render() {
    return (
      <MainLayout selected="1">
        content
      </MainLayout>
    );
  }
}

export default connect()(IndexPage);
