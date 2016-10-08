import React from 'react';
import { scrollScreen } from 'rc-scroll-anim';
import { Tabs } from 'antd';
import './less/common.less';
import Nav from './Nav';
import Banner from './Banner';
import Footer from './Footer';

function callback(key) {
  console.log(key);
}

const props = [
  // nav区域
  {
    style: {
      height: '64px',
    },
    dataSource: {
      block: {
        // logo:'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        logo:require('./less/logo.png'),
        menu1:'首页',
        menu2:'切片库',
        menu3:'远程医疗',
        menu4:'成功案例',
      },
    },
  },

  // banner区域
  {
    style: {
      height: '73%',
    },
    dataSource: {
      block: {
        top:'25%',
        // logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        logo:require('./less/logo.png'),
        title:'',
        content:'云病理切片平台',
        button:'更多...',
        bgImg:'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
        //bgImg: require('./less/starrySky.jpg'),
      },
    },
  },

  // footer区域
  {
    style: {
      height: '27%',
      paddingTop: '0.01px',
    },
    dataSource: {
      logo: {
        logo:require('./less/logo.png'),
        content:'帮助每一个病患和医生',
      },
      block1: {
        title:'产品',
        content:'产品更新记录\nAPI文档\n快速入门\n参考指南',
        contentLink:'#\n#\n#\n#',
      },
      block2: {
        title:'关于',
        content:'FAQ\n联系我们',
        contentLink:'#\n#',
      },
      block3: {
        title:'资源',
        content:'Ant Design\nAnt Design Mobile\nAnt Cool\nAntD Library',
        contentLink:'#\n#\n#\n#',
      },
      block4: {
        title:'关注',
        content:'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\nhttps://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\nhttps://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\nhttps://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg',
        contentLink:'#\n#\n#\n#',
      },
      copyright: {
        content:'Copyright © 2016 The Project by <a href=\'#\'>DeeyEye</a>. All Rights Reserved',
      },
    },
  },
];

export default class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    const children = [
      <Nav key="nav" name="nav" {...props[0]} />,
      <Banner key="banner" name="banner" {...props[1]} />,
      <Footer key="footer" name="footer" {...props[2]} />,
    ];
    return (
      <div className="homeStyle">
        {children}
      </div>
    );
  }
}
