//un'interfaccia definisce la struttura che un oggetto deve avere
//dice quali proprietà esistono e di che tipo sono
//non crea un oggetto, è solo uno "schema" da seguire (lo controlla)
export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    metadata?: any,
}

export interface User {
    id: number,
    name: string,
    email?: string,
}