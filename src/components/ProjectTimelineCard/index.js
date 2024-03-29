import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLine = props => {
  const {projectItem} = props
  return (
    <div className="card-container">
      <img className="project-image" src={projectItem.imageUrl} alt="project" />
      <div className="card-title-container">
        <h1 className="card-title">{projectItem.projectTitle}</h1>

        <div className="card-duration-container">
          <AiFillCalendar className="card-icon" />
          <p className="duration">{projectItem.duration}</p>
        </div>
      </div>
      <p className="card-description">{projectItem.description}</p>
      <a className="project-visit-link" href={projectItem.projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLine
