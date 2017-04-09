module MyApp{
    class TodoService {
        $inject = [];
        private count = 0;
        private todos: Todo[] = [
            {id: ++this.count, description: 'Wake Up', completed: false},
            {id: ++this.count, description: 'Gym' },
            {id: ++this.count, description: 'Office' }
        ];
        private tabs: Tab[] = [
            {id: 1, name: 'all', description: 'All'},
            {id: 1, name: 'todo', description: 'Todo'},
            {id: 1, name: 'completed', description: 'Completed'},
        ];
        
        getTodoList(){
            return this.todos;
        }

        getTabs(){
            return this.tabs;
        }

        addTodo(description: string){
            this.todos.push({
                id: ++this.count,
                description: description,
                completed: false
            });
        }

        removeTodos(){
            this.todos = this.todos.filter((todo) => !todo.completed);
        }

        removeTodo(item: Todo){
            var id = item.id, index = -1;
            this.todos.forEach((todo, i) => {
                if(todo.id=== id) index =i;
            });
            if(index !== -1) this.todos.splice(index, 1);
            alert('Todo '+ item.description + ' got deleted.');
        }
    }

    angular.module('todoApp').service('todoService', TodoService);
}