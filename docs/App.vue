<template>
  <div id="app">
    <fork-link :repo="repo" />
    <header>
      <img src="./assets/logo.png">
      <h1>{{pkg.name}}</h1>
      <p>{{pkg.description}}</p>
    </header>
    <main class="doc-block">
      <div style="min-height: 150px;">
        <m-ace-editor height="250px" v-model="content" :line-number="false" mode="javascript" theme="chrome"></m-ace-editor>
      </div>
      
      <readme></readme>
      <!-- <Doc/> -->
    </main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>

import LayoutFooter from './components/footer'
import ForkLink from './components/fork-link'

// import Doc from './doc.md'
import Readme from '~/README.md'
import pkg from '~/package.json'
import 'brace'
import 'brace/mode/markdown'
import 'brace/mode/javascript'
import 'brace/theme/clouds_midnight'
import 'brace/theme/chrome'

export default {
  name: 'App',
  components: {
    // Doc,
    LayoutFooter,
    ForkLink,
    Readme
  },
  data () {
    return {
      pkg,
      // content: 'wellcome \n',
      content: ''
    }
  },
  computed: {
    repo () {
      return pkg.repository.url.replace(/git\+/, '')
    }
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F6F6F6;
    font-size: 14px;
  }
  header {
    font-family: 'Cabin Sketch', 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 15px;
    background: #41B883;
    color: #fff;
  }
  main {
    margin: 0 auto;
    padding: 15px;
    max-width: 800px;
    margin-bottom: 100px;
    background: #fff;
  }
  blockquote {
    margin: 0;
    padding: 0.05em 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    background: #f3f3f3;
  }
  a{
    color: #0366D6;
    text-decoration: none;
  }
  .hljs{
    background: #FAFAFA;
  }
  code {
    color: #bc3dda;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  .doc-block table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    text-align: left;
  }
  .doc-block table td,
  .doc-block table th
  {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
  }

  .doc-block p{
    margin-bottom: 16px;
  }
  .doc-block h1,
  .doc-block h2,
  .doc-block h3,
  .doc-block h4,
  .doc-block h5,
  .doc-block h6 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  .doc-block pre{
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }
</style>
