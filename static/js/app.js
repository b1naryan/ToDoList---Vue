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
    created() { },
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
        //To do : set data to localStorage
    }
})

const app = new Vue({
    el: "#app"
})