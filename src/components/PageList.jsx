import React from 'react'
import { Card, Col, Row } from 'antd';

function PageList() {
    return (
      <div style={{  padding: '30px' }}>
      <Row  >
        <Col style={{padding:20}} xs={22} sm={20} md={12} lg={8}>
          <Card  title="Card title" hoverable >Card content</Card>
        </Col>
        <Col style={{padding:20}} xs={22} sm={20} md={12} lg={8}>
          <Card   title="Card title" hoverable >Card content</Card>
        </Col>
        <Col style={{padding:20}} xs={22} sm={20} md={12} lg={8}>
          <Card   title="Card title" hoverable >Card content</Card>
        </Col>
      </Row>
    </div>
    )
}

export default PageList
