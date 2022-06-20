import React from 'react';
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'


const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const navigate = useNavigate();
    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}/${task.description}`)
    }

    return (
        <div className='task-container'>
            <div
                onClick={()=>handleTaskClick(task.id)}
                className='checkbox-task' id={task.id}
            >
                <div
                    style= {{ backgroundColor: task.completed ? 'chartreuse' : 'rgb(42,42,42)'}} 
                    className='checkbox-task-intern'></div>
            </div>
            <div className='task-title'>
                {task.title}
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