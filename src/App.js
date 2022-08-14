import React, { useState } from 'react';

import Header from './Layouts/Header';
import Main from './Layouts/Main';
import Footer from './Layouts/Footer';


import './style/App.css';




const App = () => {

  const [tasks, setTasks] = useState([
    { id: 0, text: "Pomalować mieszkanie", date: "22-05-2022", active: true, important: true, finishDate: null },
    { id: 1, text: "Posprzatać pokój", date: "22-05-2022", active: false, important: false, finishDate: null },
    { id: 2, text: "Zrobić zakupy", date: "22-05-2022", active: true, important: false, finishDate: null },
    { id: 3, text: "Wymienić filtr wody", date: "22-05-2022", active: true, important: true, finishDate: null },
    { id: 4, text: "Iść na siłownię zrobić barki", date: "22-05-2022", active: true, important: false, finishDate: null },
    { id: 5, text: "Wypłącić pieniądze z bankomatu", date: "22-05-2022", active: false, important: false, finishDate: null }
  ]);

  const doneTask = (id) => {
    console.log(id)
  }



  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <Main tasks={tasks} doneTask={doneTask} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;