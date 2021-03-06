// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_VISITS_COUNT = 'DASHBOARD_VISITS_COUNT'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type    : DASHBOARD_VISITS_COUNT,
    payload : value
  }
}



export const actions = {
  dashboardVisitIncrement
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DASHBOARD_VISITS_COUNT]    : (state, action) => {
    return Object.assign({}, state, {
      visitsCount: state.visitsCount + action.payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitsCount: 0,
  items: [
    {key: 0, label: 'Angular'},
    {key: 1, label: 'Javascript'},
    {key: 2, label: 'HTML'},
    {key: 3, label: 'css'},
  ]
}
export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
