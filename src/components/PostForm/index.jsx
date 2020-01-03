import Taro from '@tarojs/taro'
import { View, Form, Input, Textarea} from '@tarojs/components'
import { AtButton , AtRadio} from 'taro-ui'

import './index.scss'

export default function PostForm(props) {
  return (
    <View className="post-form">
      <Form onSubmit={props.handleSubmit}>
        <View>
          <View className="article_title">类型：</View>
          <Input
            className="new_input"
            type="text"
            placeholder="反馈类型，多个使用逗号区分..."
            required="true"
            value={props.formTitle}
            onInput={props.handleTitleInput}
          />
          <View className="article_title">反馈内容：</View>
          <Textarea
            placeholder="反馈内容填写区域"
            className="answer_textarea"
            required="true"
            value={props.formContent}
            onInput={props.handleContentInput}
          />
          <View className="article_title">反馈方式：</View>
          <AtRadio
            className = "font_26"
            options={[
              { label: '实名', value: '1', desc: '' },
              { label: '匿名', value: '2' }
            ]}
            value={props.formRadio}
            onClick={props.handleRadio}
          />
          <AtButton formType="submit" type="primary">
            提交
          </AtButton>
        </View>
      </Form>
    </View>
  )
}
