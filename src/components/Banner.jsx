import React, { PropTypes } from 'react';
import { Button, Icon, Tabs } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Login from './Login';
import Register from './Register';
import './less/banner.less';

function callback(key) {
  console.log(key);
}

class Banner extends React.Component {
  render() {
    const { block } = this.props.dataSource;
    const { top, logo, title, content, button, bgImg } = block;
    const props = { ...this.props };
    const TabPane = Tabs.TabPane;
    delete props.dataSource;
    delete props.name;
    return (
      <OverPack replay
        scrollName={this.props.name}
        playScale={[0.3, 0.1]}
        {...props}
        style={{
          backgroundImage: `url(${bgImg})`,
          ...props.style,
        }}
        hideProps={{ icon: { reverse: true } }}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${this.props.className}-title`}
          key="text"
          style={{ top }}
        >
          {logo ? <span className="logo" key="logo"><img width="100%" src={logo} /></span> : null}
          {title ? <h1 key="h1">{title}</h1> : null}
          <p key="content">{content}</p>
          <Button type="ghost" key="button">{button}</Button>
        </QueueAnim>
        {/*登录注册切换*/}
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${this.props.className}-tabBox`}
          key="form"
          style={{ top }}
        >
          <div className="tabBox">
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab="登录" key="1">
                <Login/>
              </TabPane>
              <TabPane tab="注册" key="2">
                <Register/>
              </TabPane>
            </Tabs>
          </div>
        </QueueAnim>
        <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${this.props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  dataSource: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner',
};

export default Banner;
