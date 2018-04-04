
const init = 
[
  {
    department:
      {
        filterlabel: 'Department',
        filtervalue: 'All Departments',
        filteroptions: [
          'All Departments',
          'Sales',
          'Service',
          'Sales vs Service',
          'No Department',
        ],
      },
  },
  {
    account:
      {
        filterlabel: 'Account',
        filtervalue: 'Toyota Sunnyvale',
        filteroptions: [
          'Ford Lincoln Fairfield',
          'Jaguar Marin',
          'Land Rover Marin',
          'Marin Luxury Cars',
          'Mercedes-Benz of Fairfield',
          'Toyota Marin',
          'Volvo Cars Marin',
          'Volvo Cars Palo Alto',
        ],
      },
  },
  {
    time:
      {
        filterlabel: 'Time',
        filtervalue: '30 Days',
        filteroptions: [
          'Sales',
          'Service',
          'Sales vs Service',
          'No Department',
        ],
      },
  },
]

const updateFilterReducer = (state = init, action) => {
  switch (action.type) {
    case 'UPDATE_WIDGET_CONFIG':
      return state
    default: return state
  }
}

export default updateFilterReducer