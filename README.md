# ChanotUI
### 组件：

 - spin组件：加载显示组件，标签***&lt;c-spin>***
 - button组件：按钮，可调整大小、样式、图标，标签***&lt;c-button>***
 - Message组件：全局提示，可设置持续时间，标签***&lt;c-message>***

#####使用方法：需要先导入vue2.0文件

    <script src="vue.js"></script>
    <script src="ChanotUI/dist/main.js"></script>

#####定义vue挂载元素

    <body>
	    <div id="app">
			<c-button type="primary">这是一个按钮</c-button>
		</div>
	</body>
	<script>
		new Vue({
				el: '#app'
			})
	</script>

***注意：ChanotUI引入必须放在定义挂载元素之前***