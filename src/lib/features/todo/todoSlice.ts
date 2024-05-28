import axios from "@/lib/axios";
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("todo", async () => {
  const response = await axios.get("todosi");
  return response.data;
});

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface TodoState {
  error?: SerializedError;
  value?: Todo[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: TodoState = {
  status: "idle",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.value = [...action.payload]);
    });
    builder.addCase(fetchTodo.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.error = action.error;
      state.status = "failed";
    });
  },
});

export default todoSlice.reducer;
