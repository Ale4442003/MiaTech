//createAsyncThunk →  crea azioni asincrone → chiamate thunk 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const toggleComplete = createAsyncThunk(
    //nome/azione 
    "todo/toggleComplete",

    async (id, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const todo = state.todos.todos.find(todo => todo.id === id);

            if(!todo) {
                return rejectWithValue("todo non torvato");
            }

            const newCompleted = !todo.completed;

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "PATCH", //perchè sto modificando solo una parte, non tutto
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({completed: newCompleted}), //solo il valore nuovo
            });

            if (!response.ok) {
                return rejectWithValue("Error");
            }

            return {id, completed : newCompleted};

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const todo = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 1, title: "ehi", completed: false },
        ], //non ho ancora todo
        loading: false, //non sta caricando niente
        error: null //non ho nessun un errore
    },
    reducers: {
        completed(state, action) {
            const id = action.payload //prendo id
            const item = state.todos.find(todo => todo.id === id)
            if (item) item.completed = !item.completed
        }
    },
   extraReducers: (builder) => {
  builder
    .addCase(toggleComplete.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(toggleComplete.fulfilled, (state, action) => {
      const { id, completed } = action.payload;   
      const item = state.todos.find(t => t.id === id);
      if (item) item.completed = completed;
      state.loading = false;
    })
    .addCase(toggleComplete.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Errore";
    });
}

})

//non si esportano gli extrareducers-
export const { completed } = todo.actions;
export default todo.reducer;