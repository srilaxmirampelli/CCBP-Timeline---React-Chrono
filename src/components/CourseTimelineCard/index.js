import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeline = props => {
  const {courseItem} = props
  return (
    <div className="card-container">
      <div className="card-title-container">
        <h1 className="card-title">{courseItem.courseTitle}</h1>
        <div className="card-duration-container">
          <AiFillClockCircle className="card-icon" />
          <p className="duration">{courseItem.duration}</p>
        </div>
      </div>
      <p className="card-description">{courseItem.description}</p>
      <div className="course-tags-container">
        {courseItem.tagsList.map(tag => (
          <p className="tag-name" key={tag.id}>
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeline
