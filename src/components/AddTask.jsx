import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState("");
    const [inputDescription, setInputDescription] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault()
        document.querySelector('#add-task-button').style.display = 'block'
        setInputData(e.target.value);
    };

    const handleInputDescriptionChange = (e) => {
        e.preventDefault()
        setInputDescription(e.target.value)
    }

    const handleInputClick = (e) => {
        e.preventDefault()
        document.querySelector('.add-task-description-input').style.display = 'block'
        document.querySelector('#add-task-button').style.display = 'block'
    }

    function closeAddTaskContainer(){
        document.querySelector('.add-task-description-input').style.display = 'none';
        document.querySelector('#add-task-button').style.display = 'none'
        document.querySelector('.add-task-container').style.display = 'none';
        document.querySelector('#enable-task-container').style.display = 'block'
        setInputData("");
        setInputDescription("");
    }

    const handleCancelAddTask = (e) => {
        e.preventDefault();
        closeAddTaskContainer();
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData, inputDescription);
        closeAddTaskContainer();
    }

    const enableTaskContainer = (e) => {
        document.querySelector(".add-task-container").style.display = 'flex';
        document.getElementById("enable-task-container").style.display = "none";
    }

    return (
        <>
            <Button onClick={enableTaskContainer} id={'enable-task-container'}>Adiciona Nova Tarefa</Button>
            <div className='add-task-container'>
                <input
                    onClick={handleInputClick}
                    onChange={handleInputChange}
                    className='add-task-input'
                    autoComplete='off'
                    type="text"
                    value={inputData}
                    placeholder="nome da tarefa"
                />
                <div className='add-task-button-container'>
                    <Button onClick={handleAddTaskClick} id={'add-task-button'}> Adicionar </Button>
                </div>
                <textarea
                    rows="7"
                    cols="50"
                    value={inputDescription}
                    className='add-task-description-input'
                    placeholder='descrição da tarefa...'
                    onChange={handleInputDescriptionChange}
                />
                <button onClick={handleCancelAddTask} className="cancel-add-task-button"> Cancelar </button>
            </div>
        </>
    );
}

export default AddTask;