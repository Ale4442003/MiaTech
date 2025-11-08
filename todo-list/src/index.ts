// const myName: string = 'Ale'; 
// console.log(myName);
import { Todo } from "./types";

const myTodo: Todo = {
    id: 1,
    title: "Study Typescript",
    completed: false,
};

//lista di tutti i todo
const todos: Todo[] = [];

//const nomeFunzione = (parametro :Tipo (cosa entra)): cosa esce => { funzioni const}
//:Todo → deve restituire un oggetto che rispetta la forma dell'interface Todo
const addTodo = (title:string): Todo => {
    //newTodo deve rispettare l'interfaccia Todo
    const newTodo: Todo = {
        id:todos.length + 1, //id sempre diverso
        title: title,
        completed:false,
    };
    todos.push(newTodo);
    return(newTodo);
}

const assignTodoToUser = (todoId: number, userId: number) => {
    //cerco nell'array(todos) il todo che ha id uguale a quello passato alla funzione
    const searchTodo = todos.find (todo => todo.id === todoId);

    //se non lo trovo → messaggio in console
    if(!searchTodo) {
        console.log("todo non trovato");
        return;
    }

    //se esiste
    searchTodo.userId =userId;

    return searchTodo;
}

const getUserTodos = (userId: number): Todo [] => {
    //dammi solo quelli che appartengono all'utente con questo userId
    const searchAllTodo = todos.filter(todo => todo.userId === userId);
    return searchAllTodo;
}

//è una funzione che interrompe l'esecuzione e non restituirà mai niente
const throwError = (message?:string): never => {
    throw new Error (message)
}
