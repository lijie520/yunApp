import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { 
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getNews = () => {
    Taro.cloud
      .callFunction({
        name: "getNews",
        data: {}
      })
      .then(res => {
        console.log(res)
      }).catch((e)=>{
          console.log(e)
      })
  }
  release = () => {
    Taro.cloud
      .callFunction({
        name: "release",
        data: {
            title: '日本',
            image: 'ww.baidu.com',
            content: '垃圾'
        }
      })
      .then(res => {
        console.log(res)
      }).catch((e)=>{
          console.log(e)
      })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getNews}>获取</Button>
        <Button onClick={this.release}>发布</Button>
  
      </View>
    )
  }
}
