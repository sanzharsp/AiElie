import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined,LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined  } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { Steps } from 'antd';
const { Header, Content, Sider } = Layout;
const items1 = [
  {
    key:1,
    label: `Дипломдық жұмыс туралы`,
  },
  {
    key:2,
    label: `болжау`,
  },
  {
    key:3,
    label: `Толығырақ`,
  }
]

const Main = ({content}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
 
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Басты бет</Breadcrumb.Item>
            <Breadcrumb.Item>Болжау</Breadcrumb.Item>
            <Breadcrumb.Item>Суретті болжау</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Болжау дәлдігі"
          value={"8-9%"}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Қтелесу дәлдігі"
          value={'9.3%'}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
  <Card bordered={false}>
  <Steps
    items={[
      {
        title: 'Сайтқа өту',
        status: 'finish',
        description: 'Сілтеме арқылы сайтқаа өту',
        icon: <UserOutlined />,
      },
      {
        title: 'Сурет таңдау',
        status: 'finish',
        description: 'сурет таңдау батырмасын таңдау',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Батырма басу',
        status: 'process',
        description: 'Жүктеу батырмасын басу',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Жауабты алу',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
   </Card>
           {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Main;