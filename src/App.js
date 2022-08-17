import React, { useRef, useState } from 'react';

import Header from './Layouts/Header';
import Main from './Layouts/Main';
import Footer from './Layouts/Footer';
import Dialog from './Layouts/Dialog';


import './style/App.css';



const App = () => {

  const [tasks, setTasks] = useState([
    { id: 0, text: "Pomalować mieszkanie", date: "22-05-2022", active: true, important: true, finishDate: null },
    { id: 1, text: "Posprzatać pokój", date: "22-05-2022", active: true, important: false, finishDate: null },
    { id: 2, text: "Zrobić zakupy", date: "22-05-2022", active: true, important: false, finishDate: null },
    { id: 3, text: "Wymienić filtr wody", date: "22-05-2022", active: true, important: false, finishDate: null },
    { id: 4, text: "Iść na siłownię zrobić barki", date: "22-05-2022", active: true, important: false, finishDate: null },
    { id: 5, text: "Wypłącić pieniądze z bankomatu", date: "22-05-2022", active: true, important: false, finishDate: null }
  ]);

  const [dialog, setDialog] = useState(false)

  const idTaskRef = useRef();


  const doneTask = (id) => {
    const date = new Date().getTime();
    // console.log(date);

    const updateTasks = tasks.map(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = date;
      }
      return task;
    });


    setTasks(updateTasks);

  }

  const deleteTask = (id) => {
    const updateTasks = tasks.filter(task => {
      if (task.id !== id) return task;
      else return null
    });

    setTasks(updateTasks);
  }

  const addTask = (text, isPriority, date) => {
    console.log("dodano");

    const newTask = {
      id: tasks.length,
      text: text,
      date: date,
      active: true,
      important: isPriority,
      finishDate: null
    }
    // console.log(newTask)
    const newTaskList = [...tasks]
    newTaskList.push(newTask)
    // console.log(newTaskList)

    setTasks(newTaskList)

  }

  //show Dialog component and set idTaksRef
  const showDialog = (id) => {
    setDialog(true);
    idTaskRef.current = id;
  }
  // delete Task from list and hide Dialog component
  const confirmDelete = () => {
    deleteTask(idTaskRef.current)
    setDialog(false)
  }

  //show Dialog component
  const rejectDelete = () => setDialog(false)


  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <Main tasks={tasks} doneTask={doneTask} showDialog={showDialog} addTask={addTask} />
        {dialog ? <Dialog confirmDelete={confirmDelete} rejectDelete={rejectDelete} /> : null}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;