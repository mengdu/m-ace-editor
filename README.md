# m-ace-editor

Vue [ace](https://ace.c9.io) 编辑器组件。

npm

```ls
npm install -S vue-m-ace-editor
```

use

```ls
import MAceEditor from 'vue-m-ace-editor'

Vue.use(MAceEditor) // 注册 m-ace-editor 组件
```

```html
<m-ace-editor height="250px" v-model="content" :line-number="false"></m-ace-editor>
```


如果你要设置其他的主题和模式，你需要导入ace支持的，主题和模式


```js
import 'brace'
import 'brace/mode/markdown'
import 'brace/mode/javascript'
import 'brace/theme/clouds_midnight'

```

```html
<m-ace-editor height="250px" v-model="content" :line-number="false" mode="javascript" theme="chrome"></m-ace-editor>
```

## MAceEditor Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width     |   宽度  | string/number |  —  |    —     |
| height     |   高度  | string/number |  —  |    —     |
| line-height     |   内容行高  | string/number |  —  |    —     |
| value     |   内容  | string |  —  |    —     |
| font-size     |   字体大小  | string |  —  |    14px     |
| line-number     |   是否显示行号  | boolean |  —  |    true     |
| highlight-active-line     |   高亮当前行  | boolean |  —  |    true     |
| mode     |   模式  | string |  —  |   markdown    |
| theme     |   主题  | string |  —  |   —    |


## MAceEditor Events

| 事件      | 说明    | 参数      |
|---------- |-------- |---------- |
| change     |   内容改变  | value|
| blur     |   失去焦点  | editor|
| focus     |   获取焦点  | editor|
| init     |   初始化  | editor|

**更多设置**

[ACE API](https://ace.c9.io/#nav=api)

