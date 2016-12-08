#栅格布局

--------------

####导入方法

    import { row, column } from 'ChanotUI'

--------------

####使用方法

    Vue.component('row', row)
    Vue.component('column', column)

#####若用.vue文件则设置:

    {
        components: {
            'row': row,
            'column': column
        }
    }

#####该栅格采用flex布局,将一行分为12份,用span属性控制大小

    <style scoped lang="less" rel="stylesheet/less">
      .c-row {
            height: 50px;
            color: white;
      }
      .c-col {
        &:nth-of-type(2n) {
          background: #52bdee;
        }
        &:nth-of-type(2n+1) {
          background: #1aa1e6;
        }
      }
    </style>

    <template>
        <row>
            <column span="1">
                col-1
            </column>
            <column span="10">
                col-10
            </column>
        </row>
    </template>


#####可按flex布局设置row的行对齐方式

    <row space="between">
        <column span="1">
            col-1
        </column>
        <column span="10">
            col-10
        </column>
    </row>

***space选项***

 - start: flex-start
 - end: flex-end
 - center: center
 - between: space-between
 - around: space-around

######响应式布局, 依照Bootstrap布局方案

    <row space="between">
        <column xs="1" sm="6" md="2" lg="2">
          haha
        </column>
        <column xs="10" sm="6" md="8" lg="10">
          hehe
        </column>
    </row>
