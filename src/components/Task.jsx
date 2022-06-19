import React from 'react';
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'


const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const navigate = useNavigate();
    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}/${task.description}`)
    }

    const getStatusTask = () =>{
        return task.completed ? 'desmarcar' : 'marcar como completa';
    }

    return (
        <div className='task-container' style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
            <div className='task-title' onClick={() => { handleTaskClick(task.id) }}>
                {task.title}
                <div className="ballon-description">
                        <p className='text-description'>{getStatusTask()}</p>
                </div>
            </div>
            <div className='buttons-container'>
                <button className='see-task-details-button' onClick={handleTaskDetailsClick}> <CgInfo />
                    <div className="ballon-description">
                        <p className='text-description'>detalhes</p>
                    </div>
                </button>
                <button className='remove-task-button' onClick={() => {handleTaskDeletion(task.id)}}><CgClose />
                    <div className="ballon-description">
                        <p className='text-description'>deletar tarefa</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Task;