<template>
  <pre class="m-ace-editor"
    :style="{
      width: /px|\%|rem/.test(width) ? width : width + 'px',
      height: /px|\%|rem/.test(height) ? height : height + 'px',
      lineHeight: lineHeight
    }"
    ></pre>
</template>
<script>
import AceEditor from 'brace'

export default {
  name: 'MAceEditor',
  props: {
    width: [String, Number],
    height: [String, Number],
    lineHeight: {
      type: [String, Number],
      default: '28px'
    },
    value: String,
    fontSize: {
      type: [String, Number],
      default: 14
    },
    lineNumber: {
      type: Boolean,
      default: true
    },
    highlightActiveLine: {
      type: Boolean,
      default: true
    },
    mode: String,
    theme: String
  },
  data () {
    return {
      editor: null
    }
  },
  watch: {
    value (val) {
      if (val === this.editor.getValue()) return
      this.setValue()
    },
    fontSize () {
      this.setFontSize()
    },
    lineNumber () {
      this.setLineNumber()
    },
    highlightActiveLine () {
      this.setHighlightActiveLine()
    },
    mode () {
      this.setMode()
    },
    theme () {
      this.setTheme()
    }
  },
  methods: {
    setValue () {
      this.editor.setValue(this.value || '', true)
    },
    setFontSize () {
      this.editor.setFontSize(~~this.fontSize)
    },
    setLineNumber () {
      this.editor.renderer.setShowGutter(this.lineNumber)
    },
    setHighlightActiveLine () {
      this.editor.setHighlightActiveLine(this.highlightActiveLine)
    },
    setMode () {
      if (!this.mode) return false
      this.editor.session.setMode('ace/mode/' + this.mode)
    },
    setTheme () {
      if (!this.theme) return false
      this.editor.setTheme('ace/theme/' + this.theme)
    },
    listening () {
      this.editor.on('change', e => {
        this.$emit('input', this.editor.getValue())
      })
      this.editor.on('blur', e => {
        this.$emit('bulr', this.editor)
      })
      this.editor.on('focus', e => {
        this.$emit('focus', this.editor)
      })
    }
  },
  mounted () {
    this.editor = AceEditor.edit(this.$el)
    this.editor.setShowPrintMargin(false)
    this.setValue()
    this.setFontSize()
    this.setLineNumber()
    this.setHighlightActiveLine()
    this.listening()
    this.setMode()
    this.setTheme()
    this.$on('init', this.editor)
  }
}
</script>
