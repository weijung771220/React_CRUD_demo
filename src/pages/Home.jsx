import { useState, useEffect } from 'react'
import axios from 'axios'
import Heading from '../components/Heading'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks')

    if (response.status === 200) {
      return response.data
    } else {
      alert('Error Fetching data')
    }
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const response = await axios.get(`http://localhost:5000/tasks/${id}`)

    if (response.status === 200) {
      return response.data
    } else {
      alert('Error Fetching data')
    }
  }

  //Get Task
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }

  //Add Task
  const addTask = async (task) => {
    const response = await axios.post('http://localhost:5000/tasks', task)

    if (response.status === 201) {
      setTasks([...tasks, response.data])
    } else {
      alert('Error Adding data')
    }
  }

  //Delete Task
  const deleteTask = async (id) => {
    const response = await axios.delete(`http://localhost:5000/tasks/${id}`)

    if (response.status === 200) {
      setTasks(tasks.filter((task) => task.id !== id))
    } else {
      alert('Error deleting data')
    }
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updateTask = { ...task, reminder: !task.reminder }
    const response = await axios.put(
      `http://localhost:5000/tasks/${id}`,
      updateTask
    )

    if (response.status === 200) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: response.data.reminder } : task
        )
      )
    } else {
      alert('Error changing data')
    }
  }

  //Toggle ShowAddTask
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <>
      <Heading onToggle={toggleShowAddTask} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>{'No task to show'}</h3>
      )}
    </>
  )
}

export default Home
