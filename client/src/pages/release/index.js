import Taro, { Component } from '@tarojs/taro'
import { AtForm, AtButton, AtTextarea } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
    constructor() {
        super(...arguments)
        this.state={
            value: ''
        }
    }
    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() { }

    componentDidMount() {
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    onSubmit() {
        this.release()
    }
    // 输入框发生变化的时候
    handleChange (event) {
        this.setState({
          value: event.target.value
        })
      }
    release = () => {
      Taro.cloud
        .callFunction({
            name: "release",
            data: {
               content: this.state.value,
            }
        }).then(res => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <AtForm
                onSubmit={this.onSubmit.bind(this)}
            >
               <AtTextarea
                    value={this.state.value}
                    maxLength={200}
                    onChange={this.handleChange.bind(this)}
                    placeholder='你的问题是...'
                />
                <AtButton formType='submit'>发布</AtButton>
            </AtForm>
        )
    }
}
