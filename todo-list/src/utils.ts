import { Todo } from "./types";

export const filterTodos = (todos: Todo[],filtro: (todo: Todo) => boolean): Todo[] => {
  return todos.filter(filtro);
};
