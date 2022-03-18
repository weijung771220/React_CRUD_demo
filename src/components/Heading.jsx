import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'
import { FaHandPointRight } from 'react-icons/fa'

const Heading = ({ title, onToggle, showAddTask }) => {
  const location = useLocation()

  return (
    <div className="heading">
      <h3>
        {title} <FaHandPointRight />
      </h3>
      {location.pathname === '/' && (
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add'}
          onClick={onToggle}
        />
      )}
    </div>
  )
}

Heading.defaultProps = {
  title: 'Click green button to add task',
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Heading
