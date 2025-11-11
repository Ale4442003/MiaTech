"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myTodo = {
    id: 1,
    title: "Study Typescript",
    completed: false,
};
//lista di tutti i todo
const todos = [];
//const nomeFunzione = (parametro :Tipo (cosa entra)): cosa esce => { funzioni const}
//:Todo → deve restituire un oggetto che rispetta la forma dell'interface Todo
const addTodo = (title) => {
    //newTodo deve rispettare l'interfaccia Todo
    const newTodo = {
        id: todos.length + 1, //id sempre diverso
        title: title,
        completed: false,
    };
    todos.push(newTodo);
    return (newTodo);
};
const assignTodoToUser = (todoId, userId) => {
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
};
const getUserTodos = (userId) => {
    //dammi solo quelli che appartengono all'utente con questo userId
    const searchAllTodo = todos.filter(todo => todo.userId === userId);
    return searchAllTodo;
};
//è una funzione che interrompe l'esecuzione e non restituirà mai niente
const throwError = (message) => {
    throw new Error(message);
};
const parseInput = (input) => {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input === "number") {
        return input.toString();
    }
    return throwError("Errore");
};
