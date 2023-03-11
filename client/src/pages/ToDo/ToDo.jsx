import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToDo, deleteToDo } from '../../redux/toolkitSlice';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Container from '../../components/Container/Container';
import axios from 'axios';

const ToDo = () => {
    const todos = useSelector((state) => state.toolkit.todos);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    const send = async () => {
        const response = await axios.post('http://localhost:8888/todo', {
            task: todo,
            done: false,
            paranoid: false,
        });
        console.log(response.data);
        dispatch(addToDo(response.data));
    };

    return (
        <Container>
            <>
                <div className="flex justify-center items-center flex-col p-14">
                    <Input
                        name="city"
                        onChange={setTodo}
                    />
                    <div className="flex justify-center">
                        <Button
                            onClick={async () => await send()}
                            children="ADD"
                        />
                        <Button
                            onClick={() => dispatch(deleteToDo())}
                            children="DELETE"
                        />
                    </div>
                </div>
                <ul>
                    {todos &&
                        todos.map((el) => (
                            <li
                                key={Math.random()}
                                style={{ margin: '10px' }}
                            >
                                {el}
                            </li>
                        ))}
                </ul>
            </>
        </Container>
    );
};

export default ToDo;
