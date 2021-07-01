import React from 'react'
import { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;


const Main = () => {
    const [current, setCurrent] = useState('app')

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key)
    };
    console.log(current)
    return (
        <div>
            
            <Menu className="navBar" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item  key="mail" icon={<MailOutlined />}>
                        Home
                    </Menu.Item>
                
                    <Menu.Item key="app" icon={<AppstoreOutlined />}>
                        about
                    </Menu.Item>
                    <Menu.Item key="dasshboard">
                        
                            Dashboard
                        
                    </Menu.Item>
                    <Menu.Item key="dashboard">
                        <a href="#" rel="noopener noreferrer">
                            Dashboard
                        </a>
                    </Menu.Item>
                    <Menu.Item key="connect">
                        <a href="#" rel="noopener noreferrer">
                            connect Wallet
                        </a>
                    </Menu.Item>
            </Menu>
            
        </div>
    )
}

export default Main
