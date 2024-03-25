<template>
  <div>

  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="html"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
      @onChange="onChange"
    />
  </div>


    <el-button type="primary" size="default" @click="getHtml">获取html</el-button>

    <div v-html="richtext"></div>
  </div>
</template>

<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import axios from "axios"
export default {
  components: { Editor, Toolbar },
  data() {
    return {
      richtext: '',
      editor: null,
      html: "",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容...",
      MENU_CONF: {
	          //配置上传图片
	          uploadImage: {
	            customUpload: this.uploadImg,
	          },
            // 配置视频上传
            uploadVideo:{
              customUpload: this.upVideo,
            }
	        },
     },
      mode: "default", // or 'simple'
    };
  },
  mounted() {
    
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = "<p>模拟 Ajax 异步设置内容 HTML</p>";
    }, 1500);
  },
  methods: {
    getHtml() {
      console.log(this.editor);
      console.log(this.editor.getHtml())
      console.log(this.html);
      this.richtext = this.editor.getHtml()
    },
    uploadImg(file,insertFn) {
      let imgData = new FormData();
	    imgData.append("uploadFile", file);
      axios.post('https://hooakertest.digital-media.com.cn/hooaker-retail/hooakeer/ghretail/pos/image/upload', imgData).then(res=>{
        const url = res.data.data
        insertFn(url)
      })
    },
    upVideo(file,insertFn) {
      let imgData = new FormData();
	    imgData.append("uploadFile", file);
      axios.post('https://hooakertest.digital-media.com.cn/hooaker-retail/hooakeer/ghretail/pos/image/upload', imgData).then(res=>{
        const url = res.data.data
        insertFn(url)
      })
    },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    onChange(e) {
      console.log(e);
    },
  },
  beforeDestroy() {
      const editor = this.editor;
      if (editor == null) return;
      editor.destroy(); // 组件销毁时，及时销毁 editor ，重要！！！
    },
};
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
