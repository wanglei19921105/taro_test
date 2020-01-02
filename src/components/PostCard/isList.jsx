// import 语句 ...

export default function Index() {
    // 定义状态和 handleSubmit 函数 ...
  
    return (
      <View className="index">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            isList
          />
        ))}
        <PostForm
          formTitle={formTitle}
          formContent={formContent}
          handleSubmit={e => handleSubmit(e)}
          handleTitleInput={e => setFormTitle(e.target.value)}
          handleContentInput={e => setFormContent(e.target.value)}
        />
      </View>
    )
  }
  
  // ...
  