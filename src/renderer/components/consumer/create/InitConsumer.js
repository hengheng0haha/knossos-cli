import React from 'react';
import styles from './InitConsumer.css';
import {Form, Input, Button} from 'antd';
import {remote} from 'electron';
const FormItem = Form.Item;
const InputGroup = Input.Group;

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    }
  }

  handleSubmit = (e, onSuccess) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onSuccess();
      }
    });
  };

  chooseFolder = (e) => {
    e.preventDefault();
    remote.dialog.showOpenDialog({properties: ['openDirectory']}, path => {
      this.props.dispatch({type: 'project/chooseFolder', path})
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="目录"
          hasFeedback
        >
          {getFieldDecorator('directory', {
            rules: [{
              required: true, message: '请选择目录',
            }],
            initialValue: this.props.directory
          })(
            <Input placeholder="点击选择目录" onClick={this.chooseFolder.bind(this)} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="包名"
          hasFeedback
        >
          {getFieldDecorator('package', {
            rules: [{
              required: true, message: '请输入包名',
            }, {
              pattern: /^([a-zA-Z0-9_+]+[.{1}])*[a-zA-Z0-9_]+$/g, message: '包名格式错误',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="项目名"
          hasFeedback
        >
          {getFieldDecorator('project', {
            rules: [{
              required: true, message: '请输入项目名',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
        </FormItem>
      </Form>
    );
  }
}

const InitConsumer = Form.create()(RegistrationForm);

export default InitConsumer;
