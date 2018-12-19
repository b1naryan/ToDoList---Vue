Vue.component("todo-list", {
    template: "#todo-list-template",
    data() {
        return {
            newTask: {
                text: '',
                isdone: false
            },
            remainTaskCount: 0,
            totalTasks: []
        }
    },
    created() {
        this.remainTaskCount = JSON.parse(localStorage.getItem('remain')) || 0;
        this.totalTasks = JSON.parse(localStorage.getItem('total')) || [];
    },
    methods: {
        addNewTask() {
            this.totalTasks.push(this.newTask);
            this.remainTaskCount++;
            this.newTask = {
                text: '',
                isdone: false
            }
        },
        clearAllTasks() {
            this.totalTasks = [];
            this.remainTaskCount = 0;
        },
        markDone(task) {
            task.isdone = !task.isdone;
            this.remainTaskCount = this.totalTasks.filter(item => item.isdone == false).length;
        },
        removeTask(task, i) {
            if (task.isdone == false) {
                this.remainTaskCount--;
            }
            this.totalTasks.splice(i, 1)
        }
    },
    watch: {
        remainTaskCount: {
            handler: function (val) {
                localStorage.setItem('remain', JSON.stringify(val));
            },
            deep: true
        },
        totalTasks: {
            handler: function (val) {
                localStorage.setItem('total', JSON.stringify(val));
            },
            deep: true
        }
    }
})

const app = new Vue({
    el: "#app"
})