import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

function TodoList() {

  const {todos} = useSelector((state:RootState)=>state.todo)
  return (
    <div className="todos">
      {
        todos &&
        todos.map((todo:TodoType) => (
          <Todo key={todo.id} todoProps={todo}/>
        ))
      }
    </div>
  )
}

export default TodoList