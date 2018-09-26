Vue.component('note',{
    props:["todo"],
    template:`<div class="card">
        <div class="card-body">
            <h2 class="card-title">{{getTitle || '笔记标题'}}</h2>
            <textarea class="form-control" rows="3" v-model="todo.text"></textarea>
            <p class="card-text">更新时间 {{todo.text.length}}字</p>
        </div>
    </div>`,
    computed:{
        getTitle:function(){
            return _.truncate(this.todo.text, {'length': 24});
        }
    }
})

new Vue({
    el:"#app",
    data:{
        notes:[
            {"text":"笔记内容1","time":"时间戳1"},
            {"text":"笔记内容2","time":"时间戳2"},
            {"text":"笔记内容3","time":"时间戳3"}
        ]
    },
    methods:{
        add:function(){
            this.notes.unshift({"text":"","time":"时间戳push"})

            //光标自动定位到第一个表单
            document.querySelector("textarea").focus();
        }
    }
})
