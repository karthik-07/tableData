import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Text from "./Text"
import "./style.css"
import Buttons from "./Buttons"
import { Button } from 'antd';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


const New = (props) =>{

    return(
<Layout>
    <BrowserRouter>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item  >
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined />} >
        <Link to='/button1'>Complaint & Duration</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to='/button2'>Family History</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
        <Link to='/button3'>Past History</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
        <Link to='/button4'>Present Condition</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
        <Link to='/button5'>Examination</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>
        <Link to='/button6'>Diagnosis & Recommendation</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />}>
        <Link to='/button7'>Future Notes On Admission</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', display: 'flex' }}>
        
        <p className ="c1"><b>HospitalNo :</b> {props.location.aboutPage.HospNumber}</p>
        <p className ="c2"><b>PatientName :</b> {props.location.aboutPage.PatientName}</p>
        <p className ="c3"><b>Unit :</b> {props.location.aboutPage.Unit}</p>
        <p className ="c4"><b>Age :</b> {props.location.aboutPage.Age}</p>
        <p className ="c5"><b>Gender :</b> {props.location.aboutPage.Gender}</p>
        <p className ="c6"><b>VisitDate :</b> {props.location.aboutPage.VisitDate}</p>
        
        </div>
        <div className="container">
        <Button type="primary" className="box">Submit</Button>
        </div>
        
      </Content>
      <Switch>
            <Route exact path="/button1" render={() => <Buttons name="Complaint & Duration"/>} />
        
            <Route exact path="/button2" render={() => <Buttons name="Family History"/>} />
        
            <Route exact path="/button3" render={() => <Buttons name="Past History"/>} />
       
            <Route exact path="/button4" render={() => <Buttons name="Present Condition"/>} />
        
            <Route exact path="/button5" render={() => <Buttons name="Examination"/>} />
        
            <Route exact path="/button6" render={() => <Buttons name="Diagnosis & Recommendation"/>} />
       
            <Route exact path="/button7" render={() => <Buttons name="Future Notes On Admission"/>} />

        </Switch>
    </Layout>
    
    
    </BrowserRouter>
  </Layout>
    )
}

export default New;