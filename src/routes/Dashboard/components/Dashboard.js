import React from 'react'
import PropTypes from 'prop-types'

export const Dashboard = (props) => {
  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Dashboard visits: {props.dashboard.visitsCount}</h2>
      {props.dashboard.items.map((item, i) => <h4 key={i}>{item.label}</h4>)}
    </div>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object.isRequired
}

export default Dashboard
