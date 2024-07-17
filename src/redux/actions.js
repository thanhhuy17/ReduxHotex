// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {id: 5, name: 'Learn Soccer', completed: false, priority: 'Low'}
// }

//nen dung action creater
export const addTodo = (data)=>{
    return{
        type: 'todoList/addTodo',
        payload: data
    }
}