import React, { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import Header from './Layouts/Header';
import Main from './Layouts/Main';
import Dialog from './Layouts/Dialog';
import Sidebar from './Layouts/Sidebar';


import './style/style.css';



const App = () => {

   const [tasks, setTasks] = useState([
      { id: 0, text: "Zadanie 1", date: "2022-05-22", active: true, important: true, finishDate: null },
      { id: 1, text: "Zadanie 2", date: "2022-05-16", active: true, important: false, finishDate: null },
      { id: 2, text: "Zadanie 3", date: "2022-05-18", active: true, important: false, finishDate: null },
      { id: 3, text: "Zadanie 4", date: "2022-05-09", active: true, important: false, finishDate: null },
      { id: 4, text: "Zadanie 5", date: "2022-04-30", active: true, important: false, finishDate: null },
      { id: 5, text: "Zadanie 6", date: "2022-05-01", active: true, important: false, finishDate: null }
   ]);

   const [dialog, setDialog] = useState(false)

   const idTaskRef = useRef();

   const active = [...tasks].filter(task => task.active)
   const done = [...tasks].filter(task => task.active === false)


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
      const newTaskList = [...tasks]
      newTaskList.push(newTask)

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
      <Router basename={process.env.PUBLIC_URL}>

         <div className='App'>
            <header>
               <Header />
            </header>
            <main>
               <Sidebar
                  active={active}
                  done={done}
               />
               <Main
                  tasks={tasks}
                  doneTask={doneTask}
                  showDialog={showDialog}
                  addTask={addTask}
               />
               {dialog ? <Dialog
                  confirmDelete={confirmDelete}
                  rejectDelete={rejectDelete}
               /> : null}
            </main>

         </div>
      </Router>
   );
}

export default App;