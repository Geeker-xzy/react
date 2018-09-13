import React, { Component } from 'react';
import { Form, Input} from 'antd';

const FormItem = Form.Item;

class SpotvForm extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'inline',
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem
            label="货币对"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="交易量"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="买价"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="卖价"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="中间价"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="起息日"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="报价单位"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="买价编号"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="卖价编号"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
        </Form>
      </div>
    );
  }
}
// ReactDOM.render(<FormLayoutDemo />, mountNode);
export default SpotvForm;