// const myName: string = 'Ale'; 
// console.log(myName);
import { Todo } from "./types";

const myTodo: Todo = {
    id: 1,
    title: "Study Typescript",
    completed: false,
};

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