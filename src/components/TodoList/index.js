import { Col, Row, Input, Button, Select, Tag } from 'antd';
// import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';
import {v4 as uuidV4} from 'uuid'
import { useState } from 'react';
// import { todoListSelector } from '../../redux/selectors';


export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority]=useState('Medium');
  // const todoList = useSelector(todoListSelector)

  // console.log({todoList})

  const dispatch = useDispatch();
  const handleAddBtnClick=()=>{
    dispatch(addTodo({
      id: uuidV4(),
      name: todoName,
      completed: false,
      prioriry: priority
    }))
  }

  const handleInputChange = (e)=>{
    setTodoName(e.target.value)
    // console.log('input: ',e.target.value)
  }

  const handleAddPriority=(value)=>{
    setPriority(value)
    // console.log('priority: ',value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        
        {/* {todoList.map(todo=> <Todo name={todo.name} prioriry={todo.priority} />)} */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input  value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handleAddPriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddBtnClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
