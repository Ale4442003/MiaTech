// const myName: string = 'Ale'; 
// console.log(myName);
import { Todo, TodoStatus, TodoWithMetadata } from "./types";
import { User } from "./User";

const myTodo: Todo = {
    id: 1,
    title: "Study Typescript",
    completed: false,
    status: TodoStatus.Pending,
};

//lista di tutti i todo
const todos: Todo[] = [];

//const nomeFunzione = (parametro :Tipo (cosa entra)): cosa esce => { funzioni const}
//:Todo → deve restituire un oggetto che rispetta la forma dell'interface Todo
const addTodo = (title: string, metadata?: string | object): TodoWithMetadata => {
    //newTodo deve rispettare l'interfaccia Todo
    const newTodo: TodoWithMetadata = {
        id: todos.length + 1, //id sempre diverso
        title: title,
        completed: false,
        status: TodoStatus.Pending,
        //se metadata esiste (non è undefined), allora aggiungilo all'oggetto.
        ...(metadata !== undefined && { metadata }),
    };
    todos.push(newTodo);
    return (newTodo);
}

const assignTodoToUser = (todoId: number, userId: number) => {
    //cerco nell'array(todos) il todo che ha id uguale a quello passato alla funzione
    const searchTodo = todos.find(todo => todo.id === todoId);

    //se non lo trovo → messaggio in console
    if (!searchTodo) {
        console.log("todo non trovato");
        return;
    }

    //se esiste
    searchTodo.userId = userId;

    return searchTodo;
}

const getUserTodos = (userId: number): Todo[] => {
    //dammi solo quelli che appartengono all'utente con questo userId
    const searchAllTodo = todos.filter(todo => todo.userId === userId);
    return searchAllTodo;
}

//è una funzione che interrompe l'esecuzione e non restituirà mai niente
const throwError = (message?: string): never => {
    throw new Error(message)
}

const parseInput = (input: unknown): string => {
    if (typeof input === "string") {
        return input;
    }

    if (typeof input === "number") {
        return input.toString();
    }

    return throwError("Errore");
};

const updateTodo = (id: number, changes: Partial<Todo>): Todo | undefined => {
    const newUpdate = todos.find(todo => todo.id === id);

    if (!newUpdate) {
        console.log("Todo non trovato");
        return;
    }
    Object.assign(newUpdate, changes);

    return newUpdate;
}

const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
}

const createProject = (users: User[], todos: Todo[]) => {
    return { users, todos };
};

const updateTodoStatus = (todoId: number, newStatus: TodoStatus): Todo | undefined => {
    const searchTodoId = todos.find(todo => todo.id === todoId);
    if(!searchTodoId) {
        console.log("Todo non trovato")
        return;
    }
    searchTodoId.status = newStatus;
    return searchTodoId;
};

const user1 = new User("1", "Alessandra", "alessandrag408@gmail.com");
const user2 = new User("2", "Marco", "marco@example.com");

user1.addTodo(myTodo);
console.log(user1.todos);
