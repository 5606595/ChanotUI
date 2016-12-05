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
        message.duration = duration
        message.$mount(div)
        return () => {
            message.$el.classList.add("j-end")
            message.$el.addEventListener("animationend", () => {
                message.show = false
            }, false);
        }
    },
    success(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        message.type = "success"
        message.duration = duration
        message.$mount(div)
        return () => {
            message.$el.classList.add("j-end")
            message.$el.addEventListener("animationend", () => {
                message.show = false
            }, false);
        }
    },
    fail(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        message.type = "fail";
        message.duration = duration
        message.$mount(div)
        return () => {
            message.$el.classList.add("j-end")
            message.$el.addEventListener("animationend", () => {
                message.show = false
            }, false);
        }
    },
    warning(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        message.type = "warning";
        message.duration = duration
        message.$mount(div)
        return () => {
            message.$el.classList.add("j-end")
            message.$el.addEventListener("animationend", () => {
                message.show = false
            }, false);
        }
    },
    loading(content, duration) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let message = new Vue(Message)
        message.$slots.default= content
        message.type = "loading";
        message.duration = duration
        message.$mount(div)
        return () => {
            message.$el.classList.add("j-end")
            message.$el.addEventListener("animationend", () => {
                message.show = false
            }, false);
        }
    }

}