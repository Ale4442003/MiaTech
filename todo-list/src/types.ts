//un'interfaccia definisce la struttura che un oggetto deve avere
//dice quali proprietà esistono e di che tipo sono
//non crea un oggetto, è solo uno "schema" da seguire (lo controlla)
interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

const myTodo: Todo = {
    id: 1,
    title: "Study Typescript",
    completed: false,
};