export const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

// Step 1: Create todoReducer function that manages state updates through actions
export const todoReducer = (state = initialState, action = {}) => {
  // Step 2: Check if action is of type "add todo"
  if (action.type === "[TODO] add todo") {
    // Step 3: Create new array with existing state + new todo from payload
    // Using spread operator (...) to maintain immutability
    return [...state, action.payload];
  }
  console.log("Rerurn state function pura", state);
  // Step 3: Return unchanged state if action not recognized
  return state;
};
// Step 4: Function to demonstrate reducer usage
const executeExample = () => {
  // Initialize todos with initial state
  let todos = todoReducer();
  console.log("Primer let todos", todos);
  // Step 5: Create new todo object
  const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false,
  };

  // Step 6: Create action object with type and payload
  const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo,
  };

  // Step 7: Call reducer with current state and action
  todos = todoReducer(todos, addTodoAction);

  // Step 8: Log final state
  console.log("final state:", todos);

  return todos;
};

// Step 9: Export object with reducer components
export const introReducer = {
  execute: executeExample, // Function to run example
  initialState, // Initial state for reference
  todoReducer, // Reducer function
};
