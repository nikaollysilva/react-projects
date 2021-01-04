import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
          <PageHeader title="Estes são os proffs disponíveis.">
            <form id="search-teachers">
              <div className="input-block">
                <label htmlFor="subject">Matéria</label>
                <input type="text" id="subject"/>
              </div>

              <div className="input-block">
                <label htmlFor="week_day">Dia da semana</label>
                <input type="text" id="week_day"/>
              </div>

              <div className="input-block">
                <label htmlFor="time">Hora</label>
                <input type="text" id="time"/>
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

export default TeacherList;