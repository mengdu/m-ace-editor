import MAceEditor from './ace-editor'

MAceEditor.install = function (Vue) {
  Vue.component(MAceEditor.name, MAceEditor)
}

export {
  MAceEditor as default,
  MAceEditor
}
