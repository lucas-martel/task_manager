import React from 'react';
import {useParams, useNavigate} from "react-router-dom"

import './TaskDetails.css'

import Button from './Button'

const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const handleBackButtonClick = ()=>{
        navigate(-1)
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>{params.description}</p>
            </div>
        </>
    );
}

export default TaskDetails;