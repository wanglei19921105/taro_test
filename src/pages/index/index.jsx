import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PostCard from '../../components/PostCard'
import PostForm from '../../components/PostForm'
import './index.scss'

export default class Index extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: '泰罗奥特曼',
        content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。',
      },
    ],
    formTitle: '',
    formContent: '',
  }

  config = {
    navigationBarTitleText: '首页',
  }

  handleSubmit(e) {
    e.preventDefault()

    const { formTitle: title, formContent: content } = this.state
    const newPosts = this.state.posts.concat({ title, content })

    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: '',
    })
  }

  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value,
    })
  }

  handleContentInput(e) {
    this.setState({
      formContent: e.target.value,
    })
  }

  render() {
    return (
      <View className="index">
        {this.state.posts.map((post, index) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        ))}
        <PostForm
          formTitle={this.state.formTitle}
          formContent={this.state.formContent}
          handleSubmit={e => this.handleSubmit(e)}
          handleTitleInput={e => this.handleTitleInput(e)}
          handleContentInput={e => this.handleContentInput(e)}
        />
      </View>
    )
  }
}
