/**
 * Created by jorten on 2016/12/1.
 */
import Message from './message.vue'

export default {
    info(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        if(duration) {
            message.duration = duration
        }
        message.$mount(div)
    },
    success(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        message.type = "success"
        if(duration) {
            message.duration = duration
        }
        message.$mount(div)
    },
    fail(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        message.type = "fail";
        if(duration) {
            message.duration = duration
        }
        message.$mount(div)
    },
    warning(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        message.type = "warning";
        if(duration) {
            message.duration = duration
        }
        message.$mount(div)
    }

}