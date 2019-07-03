import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/news/index',
      'pages/release/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    cloud: true,
    tabBar: {
      color: "#e9bd91",
      selectedColor: "#ea3c25",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "请柬",
        iconPath: "./assets/images/weding.png",
        selectedIconPath: "./assets/images/weding_focus.png"
      },
      {
        pagePath: "pages/news/index",
        text: "祝福",
        iconPath: "./assets/images/heart.png",
        selectedIconPath: "./assets/images/heart_focus.png"
      },
      {
        pagePath: "pages/release/index",
        text: "留言",
        iconPath: "./assets/images/msg.png",
        selectedIconPath: "./assets/images/msg_focus.png"
      },
      {
        pagePath: "pages/news/index",
        text: "个人中心",
        iconPath: "./assets/images/my.png",
        selectedIconPath: "./assets/images/my_focus.png"
      },
      ]
    }
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
