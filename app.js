var app = new Vue({ 
    el: '#app', 
    data: {
        newTask: '',
        taskList: [],
        visability: 'all',
        filter: 'all',
    },
    methods: {
        addTask: function() {
            if (this.newTask) {
                this.taskList.push({
                    task: this.newTask,
                    completed: false
                });
                this.newTask = '';
            }
        },
        removeTask: function(index) {
            this.taskList.splice(index, 1);
        },
        clearCompleted: function() {
            this.taskList = this.taskList.filter(function(task) {
                return !task.completed;
            });
        },
        showAll: function() {
            this.visability = 'all';
        },
        showActive: function() {
            this.visability = 'active';
        },
        showCompleted: function() {
            this.visability = 'completed';
        }
    },
    computed: {
        remaining: function() {
            if (this.taskList.length == 0) {
                return 'Tasklist is empty';
            }
            else {
                return this.taskList.filter(function(task) {
                    return !task.completed;
                }).length + ' tasks left';
            }
        },
        filteredList: function() {
            if (this.visability == 'all') {
                return this.taskList;
            }
            else if (this.visability == 'active') {
                return this.taskList.filter(function(task) {
                    return !task.completed;
                });
            }
            else if (this.visability == 'completed') {
                return this.taskList.filter(function(task) {
                    return task.completed;
                });
            }
        },
        allCompleted: {
            get: function() {
                return this.taskList.every(function(task) {
                    return task.completed;
                });
            },
            set: function(value) {
                this.taskList.forEach(function(task) {
                    task.completed = value;
                });
            }
        }
    }


});