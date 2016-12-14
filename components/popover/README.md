#popover组件,气泡提示

--------------

####导入方法

    import { popover } from 'ChanotUI'

--------------

####使用方法

    Vue.component('c-popover', popover)

#####若用.vue文件则设置:

    {
        components: {
            'c-popover': popover
        }
    }

#####默认为hover触发

    <c-popover>
        <c-button>Hover me</c-button>
    </c-popover>

#####设置标题和内容, 格式为html字符串

    <c-popover title="这是标题" content="<p>这是内容</p>">
        <c-button>Hover me</c-button>
    </c-popover>

#####可设置悬浮提示位置, 默认在顶部提示

    <c-popover title="这是标题" content="<p>这是内容</p>" placement="top">
        <c-button>Hover me</c-button>
    </c-popover>
    <c-popover title="这是标题" content="<p>这是内容</p>" placement="bottom">
        <c-button>Hover me</c-button>
    </c-popover>
    <c-popover title="这是标题" content="<p>这是内容</p>" placement="left">
        <c-button>Hover me</c-button>
    </c-popover>
    <c-popover title="这是标题" content="<p>这是内容</p>" placement="right">
        <c-button>Hover me</c-button>
    </c-popover>

#####可设置触发方式, 目前支持点击触发

    <c-popover title="这是标题" content="<p>这是内容</p>" trigger="click">
        <c-button>Hover me</c-button>
    </c-popover>
