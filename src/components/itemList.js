import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Item from './item'

class ItemList extends Component {
    constructor() {
        super(...arguments)
    }
    render() {
        const { items } = this.props;

        return (
            <View>
                {
                    items.map((item, key) => {
                        return <Item item={item} key={item.id}/>
                    })
                }
            </View>
        )
    }
}

export default ItemList
