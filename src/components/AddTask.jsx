import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    text: '',
    day: '',
    reminder: false,
  })

  const { text, day, reminder } = formData

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const formData = {
      text,
      day,
      reminder,
    }

    onAdd(formData)

    setFormData({
      text: '',
      day: '',
      reminder: false,
    })
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          name="text"
          value={text}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Add day and time"
          name="day"
          value={day}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          checked={reminder}
          onChange={onChange}
        />
      </div>

      <input type="submit" value={'Save Task'} className="btn btn-block" />
    </form>
  )
}

export default AddTask
