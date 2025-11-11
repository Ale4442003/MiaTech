//un'interfaccia definisce la struttura che un oggetto deve avere
//dice quali proprietà esistono e di che tipo sono
//non crea un oggetto, è solo uno "schema" da seguire (lo controlla)
export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    status: TodoStatus,
}

export interface User {
    id: number,
    name: string,
    email?: string,
    todos: readonly Todo [],
}

export interface TodoWithMetadata extends Todo{
    metadata?: string | object,
}

export interface Project {
    users: [],
    todos: [],
}

export enum TodoStatus {
    Pending,
    InProgress,
    Completed,
}

// /* Utiliti */

//   interface UserInfo {
//       id: string,
//       name: string,
//       age: number,
//   }

//   interface UserAuth extends UserInfo {
//       isAuth: boolean,
//   }

//   type User =UserInfo & UserAuth

// //Prendi dal tipo di dato User soltanto gli id
// //Pick → seleziona qualcosa dal tipo di dato che ho specificato tra le <...>
//   const user: Pick<User, "id" | "name">= {
//      id:"",
//      name: "",
//  }

// // è il contrario di Pick → prendi tutto tranne name e isAuth
//  const user1: Omit<User, "name" | "isAuth"> = {
//      id: "",
//      age: 0
//  }

// //readonlyUser → di sola lettura, non permette di modificare un elemento
//  const readonlyUser: Readonly<User> = {
//      id:"",
//      name: "",
//      age: 0,
//      isAuth: true
//  }

// // Partial → rende tutte le proprietà di tipo opzionale
// const user2: Partial<User> = {
//      id: "",
//  } // → per creare un oggetto 

//  //Required → rende tutti gli elementi obbligatori (opposto di partial)
//  // anche se ipotizzando ho alcuni? , verrano cmq gestiti come obbligatori
//  const user3: Required<User> = {
//      id: "",
//      name: "",
//      age:0,
//      isAuth: false
//  }

//enum → enumeratio → strutture che permetto di definire dei dati rigidi
//  all'interno di valore
//→ numeric
// enum Status{
//     Pending, //0
//     Aborted, // 1
//     Completed, //2
// }
// //→ string
// enum Role {
//     Guest= "GUEST",
//     User = "USER",
//     Admin = "ADMIN",
// }
// //→ mixed
// enum MixedResponse {
//     yes = 1,
//     no = "NO",
// }

// const callStatus: Status = Status.Aborted;
// const callStatus: Status = Status.Pending;
// const callStatus: Status = Status.Completed;

// const role: Role.Admin;
// const res: MixedResponse = MixedResponse.yes;
// const res: MixedResponse = MixedResponse.no;



