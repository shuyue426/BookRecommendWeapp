import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import { AtTag } from 'taro-ui'

if (process.env.TARO_ENV === 'weapp') {
    require('taro-ui/dist/weapp/css/index.css')
} else if (process.env.TARO_ENV === 'h5') {
    require('taro-ui/dist/h5/css/index.css')
}

class Item extends Component {
    constructor() {
        super(...arguments)
    }
    gotoDetail = (e) => {
        const { item } = this.props;

        Taro.navigateTo({
            url: '/pages/bookDetail/index?id=' + item.id
        })
    }
    render() {
        const { item } = this.props;

        return (
            <View  className='at-row' onClick={this.gotoDetail}>
                <View  className='at-col at-col-4'>
                    {item.src && <Image mode="scaleToFill" src={item.src}></Image>}
                </View >
                <View  className='at-col  at-col-20'>
                    <View  className='at-article__h1'>{item.title}</View >
                    <View  className='at-article__info'>{item.desc}</View >
                    <View >
                        {item.isNew && <AtTag type='primary' circle>新书</AtTag>}
                        {item.isMore && <AtTag circle>畅销</AtTag>}
                    </View >    
                </View  >
            </View  >
        )
    }
}

export default Item
