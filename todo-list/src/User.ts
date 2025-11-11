import { Todo } from "./types";

class User {
    id: string;
    name: string;
    email?: string | undefined;
    todos: Todo[] = [];

    constructor(id: string, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    addTodo(todo: Todo) {
        this.todos.push(todo);
    }
}
export { User }