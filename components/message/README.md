#message组件,全局提示

--------------

####导入方法

    import { message } from 'ChanotUI'

--------------

####使用方法

	message.info("这是提示语")

#####设置提示类型

    message.success("这是成功提示语")
    message.fail("这是失败提示语")
    message.warning("这是警告提示语")

#####可设置持续时间

	message.info("持续10秒的提示语", 10)
