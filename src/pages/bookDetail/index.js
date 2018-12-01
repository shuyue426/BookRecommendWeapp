import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import shareHoc from '../../hoc/shareHoc';

if (process.env.TARO_ENV === 'weapp') {
  require('taro-ui/dist/weapp/css/index.css')
} else if (process.env.TARO_ENV === 'h5') {
  require('taro-ui/dist/h5/css/index.css')
}
import './index.scss'

@shareHoc()

class BookDetail extends Component {

  constructor() {
    super(...arguments)
  }
  backToHome = (e) => {
    Taro.navigateTo({
        url: '/pages/index/index'
    })
  }
  render() {
    return (
      <View >
           {/* Judge whether under h5 enviroment */}
           { window && <View><AtIcon value='chevron-left' size='30' color='#F#F#F#' onClick={this.backToHome}></AtIcon>Back</View>}
           <View className="bookId">{this.$router.params.id}</View>
      </View  >
    )
  }
}

export default BookDetail
