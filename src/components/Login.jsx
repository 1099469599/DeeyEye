/**
 * Created by Tiantian on 2016/9/8.
 */
import  React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class Login extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  render() {
    const { getFieldProps } = this.props.form;
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { type: 'email', message: '请输入正确的邮箱地址' },
        ],
        trigger: ['onBlur', 'onChange'],
      }],
    });
    const FormItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 },
    }
    return (
      <div>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormItem label="用户名" {...FormItemLayout} hasFeedback>
            <Input placeholder="请输入邮箱" {...emailProps} type="email" />
          </FormItem>
          <FormItem label="密码" {...FormItemLayout}>
            <Input type="password" placeholder="请输入密码" {...getFieldProps('password')} />
          </FormItem>
          <FormItem wrapperCol={{ offset: 5 }}>
            <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
          </FormItem>
          <FormItem wrapperCol={{ offset: 10 }}>
            <Button type="primary" htmlType="submit">登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
};

Login = Form.create()(Login);

export default Login;


