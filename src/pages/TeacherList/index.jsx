import React from 'react';

import './style.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

function TeacherList(params) {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teacher">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" name="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Matérias</label>
                        <input type="text" name="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Matérias</label> 
                        <input type="text" name="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList