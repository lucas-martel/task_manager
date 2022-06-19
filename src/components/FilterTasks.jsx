import React from 'react';
import './FilterTasks.css';

const FilterTasks = ({ filterTasksInView }) => {
    let filterTypeAll = 'todas';
    let filterTypeCompleted = 'completadas';
    let filterTypePending = 'pendentes';

    const handleSelectOptionsChange = (e) => {
        e.preventDefault();
        filterTasksInView(e.target.value, filterTypeAll, filterTypeCompleted, filterTypePending);
    }

    return (
        <section className='filter-tasks-container'>
            <span className='select-item'>mostrar tarefas:</span>
            <select className="filter-list-select select-item" onChange={handleSelectOptionsChange}>
                <option value={filterTypeAll}>{filterTypeAll}</option>
                <option value={filterTypeCompleted}>{filterTypeCompleted}</option>
                <option value={filterTypePending}>{filterTypePending}</option>
            </select>
        </section>
    );
}

export default FilterTasks;