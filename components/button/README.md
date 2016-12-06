#button组件,按钮

--------------

####导入方法

    import { button } from 'ChanotUI'

--------------

####使用方法

    Vue.component('c-button', button)

#####可设置大小

    <c-button size="large">大按钮</c-button>
    <c-button>默认按钮</c-button>
    <c-button size="small">小按钮</c-button>

#####可设置类型

    <c-button type="primary">Primary</c-button>
    <c-button disabled>disabled</c-button>

#####带图标的按钮

    <c-button icon="search">搜索</c-button>
    <c-button icon="forward">前进<c-button>
    <c-button icon="backward">后退<c-button>
    <c-button icon="search" shape="circle" />

#####加载按钮

    <c-button loading>加载中</c-button>

