import React from 'react'
import { Card, Col, Row } from 'antd';

const PageList=({data})=> {
    return (
      <div style={{  padding: '30px' }}>
      <Row>
        {data.map(
          post=>
          <Col  key={post.id} style={{padding:15}} xs={23} sm={24} md={12} lg={8}>
          <Card  title={post.body} hoverable >{post.username}</Card>
        </Col>
        
        )}
      </Row>
    </div>
    )
}

export default PageList
