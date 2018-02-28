import * as React from 'react'
import { Table, Row, Col, Input, Form, Button, Icon, Card } from 'antd'
import { GET } from './../http'
const FormItem = Form.Item

import styles from '../style/tableList.less';
// let styles = require('../style/tableList.less');


import PageHeaderLayout from '../layout/PageHeaderLayout'
import res from './res.json'



class TableList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: res.data,

      columns: [{
        title: '贴现ID',
        dataIndex: 'discountId',
        key: 'discountId'
      }, {
        title: '交易日期',
        dataIndex: 'applyDate',
        key: 'applyDate'
      }, {
        title: 'ARID',
        dataIndex: 'arSourceId',
        key: 'arSourceId'
      }]
    }
  }
  renderFrom(){
    GET({
      host: 'http://10.8.30.76:8082/financing/select',
      pathname: '/'
    },{
      "applyDate": "",
      "discountId": "",
      "pageNum": 0,
      "pageSize": 0,
      "status": 0,
      "supplierName": ""
    }).subscribe(data => console.log(data))
  
    // debugger
    return (
      <Form onSubmit={this.handleSearch}  layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规则编号">
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='规则编号'>
              <Input placeholder='请输入' />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='规则编号'>
              <Input placeholder='请输入' />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label='规则编号'>
              <Input placeholder='请输入' />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='规则编号'>
              <Input placeholder='请输入' />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='规则编号'>
              <Input placeholder='请输入' />
            </FormItem>
          </Col>
        </Row>
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
          </span>
        </div>
      </Form>
    )
  }

  render
  render () {
    return (
      <PageHeaderLayout title="查询表格">
       <Card bordered={true}>
        <div className={styles.tableList}>
          <div className={styles.tableListForm}>
            {this.renderFrom()}
          </div>
          <Table dataSource={this.state.dataSource} columns={this.state.columns} />
        </div>

        </Card>
      </PageHeaderLayout>
    )
  }
}

export default TableList
