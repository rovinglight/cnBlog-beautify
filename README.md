# cnBlog 美化方案（React）
## 开发思路
由于cnblog的界面定制只能通过css以及侧边栏公告的js代码来进行。那么既然有了css以及js权限，那么我打算对界面定制分三步来进行。
1. 从标签中提取文章
2. 将页面清空，包括所有css以及body中的所有内容（HTML内容可以由React自行处理，我们只需着重注意head中的标签）
3. 使用React进行渲染

## Get Started
这个repo由creat-react-app来进行的初始化，所以是支持热加载的。
```
//安装环境依赖
npm install
//在开发环境中运行
npm start
//build for product
npm run build
```
## 部署
你们可能会注意到我的gitignore中并没有加入build，这是因为需要在github page上host着编译好的js以及css，到时在cnblog中进行引用。
