//un'interfaccia definisce la struttura che un oggetto deve avere
//dice quali proprietà esistono e di che tipo sono
//non crea un oggetto, è solo uno "schema" da seguire (lo controlla)
export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
}

export interface User {
    id: number,
    name: string,
    email?: string,
}

export interface TodoWithMetadata extends Todo{
    metadata?: string | object,
}

//Aggiorna la funzione addTodo per accettare 
// un parametro opzionale 
//metadata di tipo string | object

// interface UserInfo {
//     id: string,
//     name: string,
//     age: number,
// }

// interface UserAuth extends UserInfo {
//     isAuth: boolean,
// }

// type User =UserInfo & UserAuth

// const user: User = {

// }