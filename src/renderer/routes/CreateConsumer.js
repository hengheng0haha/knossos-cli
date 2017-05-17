import React from 'react';
import {connect} from 'dva';
import {Steps, Button, message} from 'antd';
import InitConsumer from '../components/consumer/create/InitConsumer';
import AddConsumer from '../components/consumer/create/AddConsumer';
import MainLayout from '../components/Layout/MainLayout';
import styles from './CreateConsumer.css';

const Step = Steps.Step;


class CreateConsumer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  render() {
    const steps = [{
      title: '初始化工程',
      content: <InitConsumer
        directory={this.props.directory}
        dispatch={this.props.dispatch}
        _package={this.props._package}
        name={this.props.name}
        ref={(input) => {
          this.initConsumer = input
        }}
      />
    }, {
      title: '添加消费者',
      content: <AddConsumer
        dispatch={this.props.dispatch}
        consumers={this.props.consumers}
        ref={(input) => this.addConsumer = input}
      />
    }];

    return (
      <MainLayout selected="2">
        <Steps current={this.state.current}>
          {steps.map((item) => {
            return <Step key={item.title} title={item.title}/>
          })}
        </Steps>
        <div className={styles.stepsContent}>{steps[this.state.current].content}</div>
        <div className={styles.stepsAction}>
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>下一步</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => this.done()}>完成</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
              上一步
            </Button>
          }
        </div>
      </MainLayout>
    );
  }

  next() {
    switch (this.state.current) {
      case 0:
        this.initConsumer.getForm().validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const current = this.state.current + 1;
            this.setState({current});
          }
        });
        break;
      case 1:
        break;
      default:
        break;
    }
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }

  done() {
    message.success('Processing complete!')
  }

}

function mapStateToProps(state) {
  return {...state.project};
}

export default connect(mapStateToProps)(CreateConsumer);
