1. To install dependencies, cd to web-scrape and type the command: npm install
2. To start the server, run npx nodemon server.js
3. The data should be formatted as an array of JSONs, where each JSON has a TITLE, TABLE_HEADER, and TABLE_BODY attribute
4. The following is the expected output. There is a console.log statement in the timeScraper.js file to confirm this output

[
  'Commons',
  'E. Bronson Ingram',
  'Nicholas S. Zeppos',
  'Rothschild Dining Hall'
]
[
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ]
]
[
  [
    [ 'Monday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Tuesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Wednesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Thursday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Friday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Saturday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ],
    [ 'Sunday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ]
  ],
  [
    [ 'Monday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Tuesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Wednesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Thursday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Friday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Saturday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ],
    [ 'Sunday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ]
  ],
  [
    [ 'Monday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Tuesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Wednesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Thursday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Friday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Saturday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ],
    [ 'Sunday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ]
  ],
  [
    [ 'Monday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Tuesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Wednesday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Thursday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Friday', '7:00AM-8:00PM', '7:00AM-8:00PM', '7:00AM-8:00PM' ],
    [ 'Saturday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ],
    [ 'Sunday', '9:00AM-8:00PM', '9:00AM-8:00PM', '9:00AM-8:00PM' ]
  ]
]
[
  '2301 Allergen Free',
  'Kitchen at Kissam - Gluten Free',
  'Rand Dining Center',
  'The Pub at Overcup Oak'
]
[
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ]
]
[
  [
    [ 'Monday', '7:00AM-10:00AM', '11:00AM-3:00PM', '4:30PM-8:00PM' ],
    [ 'Tuesday', '7:00AM-10:00AM', '11:00AM-3:00PM', '4:30PM-8:00PM' ],
    [
      'Wednesday',
      '7:00AM-10:00AM',
      '11:00AM-3:00PM',
      '4:30PM-8:00PM'
    ],
    [ 'Thursday', '7:00AM-10:00AM', '11:00AM-3:00PM', '4:30PM-8:00PM' ],
    [ 'Friday', '7:00AM-10:00AM', '11:00AM-3:00PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', '4:30PM-8:00PM' ]
  ],
  [
    [ 'Monday', '7:00AM-10:00AM', '11:00AM-2:00PM', '4:30PM-8:00PM' ],
    [ 'Tuesday', '7:00AM-10:00AM', '11:00AM-2:00PM', '4:30PM-8:00PM' ],
    [
      'Wednesday',
      '7:00AM-10:00AM',
      '11:00AM-2:00PM',
      '4:30PM-8:00PM'
    ],
    [ 'Thursday', '7:00AM-10:00AM', '11:00AM-2:00PM', '4:30PM-8:00PM' ],
    [ 'Friday', '7:00AM-10:00AM', '11:00AM-2:00PM', '4:30PM-8:00PM' ],
    [ 'Saturday', '10:00AM-2:00PM', '10:00AM-2:00PM', '4:30PM-8:00PM' ],
    [ 'Sunday', '10:00AM-2:00PM', '10:00AM-2:00PM', '4:30PM-8:00PM' ]
  ],
  [
    [ 'Monday', '7:00AM-11:00AM', '11:00AM-3:00PM', 'CLOSED' ],
    [ 'Tuesday', '7:00AM-11:00AM', '11:00AM-3:00PM', 'CLOSED' ],
    [ 'Wednesday', '7:00AM-11:00AM', '11:00AM-3:00PM', 'CLOSED' ],
    [ 'Thursday', '7:00AM-11:00AM', '11:00AM-3:00PM', 'CLOSED' ],
    [ 'Friday', '7:00AM-11:00AM', '11:00AM-3:00PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ],
  [
    [ 'Monday', 'CLOSED', 'CLOSED', '3:00PM-8:00PM' ],
    [ 'Tuesday', 'CLOSED', 'CLOSED', '3:00PM-8:00PM' ],
    [ 'Wednesday', 'CLOSED', 'CLOSED', '3:00PM-8:00PM' ],
    [ 'Thursday', 'CLOSED', 'CLOSED', '3:00PM-8:00PM' ],
    [ 'Friday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', '3:00PM-8:00PM' ]
  ]
]
[
  'Grins Vegetarian Café',
  'Holy Smokes',
  'Local Java at Alumni Café',
  "Suzie's Blair School of Music",
  "Suzie's Featheringill",
  "Suzie's MRB III",
  "Suzie's Central Library - Food for Thought Cafe"
]
[
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ]
]
[
  [
    [ 'Monday', '7:00AM-6:30PM', '7:00AM-6:30PM', '7:00AM-6:30PM' ],
    [ 'Tuesday', '7:00AM-6:30PM', '7:00AM-6:30PM', '7:00AM-6:30PM' ],
    [ 'Wednesday', '7:00AM-6:30PM', '7:00AM-6:30PM', '7:00AM-6:30PM' ],
    [ 'Thursday', '7:00AM-6:30PM', '7:00AM-6:30PM', '7:00AM-6:30PM' ],
    [ 'Friday', '7:00AM-2:00PM', '7:00AM-2:00PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ],
  [
    [ 'Monday', 'CLOSED', '12:00PM-1:30PM', '5:00PM-7:30PM' ],
    [ 'Tuesday', 'CLOSED', '12:00PM-1:30PM', '5:00PM-7:30PM' ],
    [ 'Wednesday', 'CLOSED', '12:00PM-1:30PM', '5:00PM-7:30PM' ],
    [ 'Thursday', 'CLOSED', '12:00PM-1:30PM', '5:00PM-7:30PM' ],
    [ 'Friday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', '12:00PM-3:00PM', 'CLOSED' ]
  ],
  [
    [ 'Monday', '7:00AM-4:00PM', '7:00AM-4:00PM', 'CLOSED' ],
    [ 'Tuesday', '7:00AM-4:00PM', '7:00AM-4:00PM', 'CLOSED' ],
    [ 'Wednesday', '7:00AM-4:00PM', '7:00AM-4:00PM', 'CLOSED' ],
    [ 'Thursday', '7:00AM-4:00PM', '7:00AM-4:00PM', 'CLOSED' ],
    [ 'Friday', '7:00AM-4:00PM', '7:00AM-4:00PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ],
  [
    [ 'Monday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Tuesday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Wednesday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Thursday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Friday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ],
  [
    [ 'Monday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Tuesday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Wednesday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Thursday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Friday', '8:00AM-2:30PM', '8:00AM-2:30PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ],
  [
    [ 'Monday', '7:30AM-4:30PM', '7:30AM-4:30PM', 'CLOSED' ],
    [ 'Tuesday', '7:30AM-4:30PM', '7:30AM-4:30PM', 'CLOSED' ],
    [ 'Wednesday', '7:30AM-4:30PM', '7:30AM-4:30PM', 'CLOSED' ],
    [ 'Thursday', '7:30AM-4:30PM', '7:30AM-4:30PM', 'CLOSED' ],
    [ 'Friday', '7:30AM-4:30PM', '7:30AM-4:30PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ],
  [
    [ 'Monday', '8:00AM-8:00PM', '8:00AM-8:00PM', '8:00AM-8:00PM' ],
    [ 'Tuesday', '8:00AM-8:00PM', '8:00AM-8:00PM', '8:00AM-8:00PM' ],
    [ 'Wednesday', '8:00AM-8:00PM', '8:00AM-8:00PM', '8:00AM-8:00PM' ],
    [ 'Thursday', '8:00AM-8:00PM', '8:00AM-8:00PM', '8:00AM-8:00PM' ],
    [ 'Friday', '8:00AM-3:00PM', '8:00AM-3:00PM', 'CLOSED' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ]
]
[
  'Branscomb Munchie Mart',
  'Commons Munchie Mart',
  'Highland Munchie Mart',
  'Kissam Munchie Mart',
  'Rand Munchie Mart',
  'Rothschild Munchie Mart'
]
[
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ],
  [ 'DAY', 'BREAKFAST', 'LUNCH', 'DINNER' ]
]
[
  [
    [ 'Monday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [ 'Tuesday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [
      'Wednesday',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM'
    ],
    [
      'Thursday',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM'
    ],
    [ 'Friday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [
      'Saturday',
      '9:00AM-12:00AM',
      '9:00AM-12:00AM',
      '9:00AM-12:00AM'
    ],
    [ 'Sunday', '9:00AM-12:00AM', '9:00AM-12:00AM', '9:00AM-12:00AM' ]
  ],
  [
    [ 'Monday', '7:00AM-11:00PM', '7:00AM-11:00PM', '7:00AM-11:00PM' ],
    [ 'Tuesday', '7:00AM-11:00PM', '7:00AM-11:00PM', '7:00AM-11:00PM' ],
    [
      'Wednesday',
      '7:00AM-11:00PM',
      '7:00AM-11:00PM',
      '7:00AM-11:00PM'
    ],
    [
      'Thursday',
      '7:00AM-11:00PM',
      '7:00AM-11:00PM',
      '7:00AM-11:00PM'
    ],
    [ 'Friday', '7:00AM-11:00PM', '7:00AM-11:00PM', '7:00AM-11:00PM' ],
    [
      'Saturday',
      '9:00AM-11:00PM',
      '9:00AM-11:00PM',
      '9:00AM-11:00PM'
    ],
    [ 'Sunday', '9:00AM-11:00PM', '9:00AM-11:00PM', '9:00AM-11:00PM' ]
  ],
  [
    [ 'Monday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [ 'Tuesday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [
      'Wednesday',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM'
    ],
    [
      'Thursday',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM'
    ],
    [ 'Friday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [
      'Saturday',
      '9:00AM-12:00AM',
      '9:00AM-12:00AM',
      '9:00AM-12:00AM'
    ],
    [ 'Sunday', '9:00AM-12:00AM', '9:00AM-12:00AM', '9:00AM-12:00AM' ]
  ],
  [
    [ 'Monday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [ 'Tuesday', '7:30AM-12:00AM', '7:30AM-12:00AM', '7:30AM-12:00AM' ],
    [
      'Wednesday',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM',
      '7:30AM-12:00AM'
    [ 'Friday', '7:00AM-7:00PM', '7:00AM-7:00PM', '7:00AM-7:00PM' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', 'CLOSED' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', 'CLOSED' ]
  ],
  [
    [ 'Monday', 'CLOSED', 'CLOSED', '5:00PM-12:00AM' ],
    [ 'Tuesday', 'CLOSED', 'CLOSED', '5:00PM-12:00AM' ],
    [ 'Wednesday', 'CLOSED', 'CLOSED', '5:00PM-12:00AM' ],
    [ 'Thursday', 'CLOSED', 'CLOSED', '5:00PM-12:00AM' ],
    [ 'Friday', 'CLOSED', 'CLOSED', '5:00PM-12:00AM' ],
    [ 'Saturday', 'CLOSED', 'CLOSED', '9:00AM-12:00AM' ],
    [ 'Sunday', 'CLOSED', 'CLOSED', '9:00AM-12:00AM' ]
  ]
]