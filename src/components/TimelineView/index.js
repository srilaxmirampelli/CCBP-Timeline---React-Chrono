import {Chrono} from 'react-chrono'
import ProjectTimeLine from '../ProjectTimelineCard'
import CourseTimeline from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getItemByCategory = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLine projectItem={item} />
    }
    return <CourseTimeline courseItem={item} />
  }

  return (
    <div className="timeline-view-container">
      <div className="chrono-container">
        <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>

        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => getItemByCategory(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
