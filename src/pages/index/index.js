import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { set_topic } from '../../store/actions/topic'
import { View, ScrollView} from '@tarojs/components'
import { AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'
import ItemList from '../../components/itemList';
import shareHoc from '../../hoc/shareHoc';

if (process.env.TARO_ENV === 'weapp') {
  require('taro-ui/dist/weapp/css/index.css')
} else if (process.env.TARO_ENV === 'h5') {
  require('taro-ui/dist/h5/css/index.css')
}
import './index.scss'

@shareHoc()
class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      loading: false,
      value: '',
      current: 0,
      currentClass: 1,
      classes: [{ classId: 1, name: "投资理财", content: "投资理财" },
      { classId: 2, name: "哲學思考", content: "哲學思考" },
      { classId: 3, name: "健康美食", content: "健康美食" }],
      allBooks: [{ id: 1, classId: 1, desc: "查理芒格", title: "查理芒格", isNew: true },
      { id: 2, classId: 2, desc: "投资要义", title: "投资要义", isNew: true },
      { id: 3, classId: 1, desc: "查理芒格", title: "查理芒格", isMore: true },
      { id: 4, classId: 2, desc: "投资要义", title: "投资要义", isMore: true },
      { id: 5, classId: 1, desc: "查理芒格", title: "查理芒格", isMore: true },
      { id: 6, classId: 2, desc: "投资要义", title: "投资要义", isMore: true },
      { id: 7, classId: 1, desc: "查理芒格", title: "查理芒格", isMore: true },
      { id: 8, classId: 2, desc: "投资要义", title: "投资要义", isMore: true },
      { id: 9, classId: 1, desc: "查理芒格", title: "查理芒格", isMore: true },
      { id: 10, classId: 2, desc: "投资要义", title: "投资要义", isMore: true },
      { id: 11, classId: 1, desc: "查理芒格", title: "查理芒格", isMore: true },
      { id: 12, classId: 2, desc: "投资要义", title: "投资要义", isMore: true }],
      books: [{ id: 1, classId: 1, desc: "查理芒格", title: "查理芒格", isNew: true },
      { id: 2, classId: 2, desc: "投资要义", title: "投资要义", isNew: false, isMore: true }],

    }
    this.updateList = this.updateList.bind(this);
    this.appendNextPageList = this.appendNextPageList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  onChange(value) {
    this.setState({
      value: value
    })
  }
  handleClick(value) {
    let currentTab = this.state.classes[value];

    this.props.setTopic(currentTab.name);
    this.setState({
      current: value,
      currentClass: currentTab.classId
    })
  }
  updateList() {
    if (this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
   
    Taro.hideLoading()
      
        this.setState({
          loading:false,
          allBooks: [{ id: 1, classId: 1, desc: "查理芒格1", title: "查理芒格", isNew: true },
          { id: 2, classId: 2, desc: "投资要义1", title: "投资要义", isNew: true },
          { id: 3, classId: 1, desc: "查理芒格1", title: "查理芒格", isMore: true },
          { id: 4, classId: 2, desc: "投资要义1", title: "投资要义", isMore: true },
          { id: 5, classId: 1, desc: "查理芒格1", title: "查理芒格", isMore: true },
          { id: 6, classId: 2, desc: "投资要义1", title: "投资要义", isMore: true },
          { id: 7, classId: 1, desc: "查理芒格1", title: "查理芒格", isMore: true },
          { id: 8, classId: 2, desc: "投资要义1", title: "投资要义", isMore: true },
          { id: 9, classId: 1, desc: "查理芒格1", title: "查理芒格", isMore: true },
          { id: 10, classId: 2, desc: "投资要义1", title: "投资要义", isMore: true },
          { id: 11, classId: 1, desc: "查理芒格1", title: "查理芒格", isMore: true },
          { id: 12, classId: 2, desc: "投资要义1", title: "投资要义", isMore: true }]
        })
  }
  appendNextPageList() {
    if (this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
   
    Taro.hideLoading()
      
        this.setState({
          loading:false,
          allBooks: [{ id: 1, classId: 1, desc: "查理芒格2", title: "查理芒格", isNew: true },
          { id: 2, classId: 2, desc: "投资要义2", title: "投资要义", isNew: true },
          { id: 3, classId: 1, desc: "查理芒格2", title: "查理芒格", isMore: true },
          { id: 4, classId: 2, desc: "投资要义2", title: "投资要义", isMore: true },
          { id: 5, classId: 1, desc: "查理芒格2", title: "查理芒格", isMore: true },
          { id: 6, classId: 2, desc: "投资要义2", title: "投资要义", isMore: true },
          { id: 7, classId: 1, desc: "查理芒格2", title: "查理芒格", isMore: true },
          { id: 8, classId: 2, desc: "投资要义2", title: "投资要义", isMore: true },
          { id: 9, classId: 1, desc: "查理芒格2", title: "查理芒格", isMore: true },
          { id: 10, classId: 2, desc: "投资要义2", title: "投资要义", isMore: true },
          { id: 11, classId: 1, desc: "查理芒格2", title: "查理芒格", isMore: true },
          { id: 12, classId: 2, desc: "投资要义2", title: "投资要义", isMore: true }]
        })
  }
  render() {
    const { loading, currentClass, classes, allBooks } = this.state;

    return (
      <div className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <AtTabs current={this.state.current}
          scroll
          tabList={classes.map((x) => { return { title: x.name } })}
          onClick={this.handleClick.bind(this)}>
          {
            classes.map((item, key) => {
              return <AtTabsPane current={this.state.current} index={key}>
                <ScrollView className='container'
                  scrollY
                  scrollWithAnimation
                  scrollTop='0'
                  lowerThreshold='10'
                  upperThreshold='10'
                  style={{height:'86vh'}}
                  onScrollToUpper={this.updateList}
                  onScrollToLower={this.appendNextPageList}
                >
                  {
                    loading
                      ? <View className='txcenter'>加载中</View>
                      : <ItemList items={allBooks.filter(x => { return x.classId == currentClass })} />
                  }
                </ScrollView>
              </AtTabsPane>
            })
          }
        </AtTabs>
      </div >
    )
  }
}

export default connect (({ topic }) => ({
  topic
}), (dispatch) => ({
  setTopic (data) {
    dispatch(set_topic(data))
  }
}))(Index)
