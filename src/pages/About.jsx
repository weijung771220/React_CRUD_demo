import { Link } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri'

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <h3>App Version: 1.0.0</h3>
      <Link to="/">
        Go Back <RiArrowGoBackFill />
      </Link>
    </div>
  )
}

export default About
