export const DINING_HALLS = [
    {
        id: 0,
        name: 'Rand Dining Hall',
    },
    {
        id: 1,
        name: 'Kissam Dining Hall',
    },
    {
        id: 2,
        name: 'Rothschild Dining Hall',
    },
    {
        id: 3,
        name: 'E. B. I. Dining Hall',
    },
    {
        id: 4,
        name: 'Zeppos Dining Hall',
    },
    {
        id: 5,
        name: 'Commons Dining Hall',
    }
]

export const COMPLAINTS = [
    {
        id: 1,
        userId: 1,
        diningHallId: 4,
        contact: "arjun@yahoo.com",
        content: 'This is a complaint',
        urgency: 5,
        timestamp: 1132,
    },
    {
        id: 2,
        userId: 2,
        diningHallId: 2,
        contact: "ethan@yahoo.com",
        content: 'This is a complaint',
        urgency: 3,
        timestamp: 1132,
    },
    {
        id: 3,
        userId: 3,
        diningHallId: 1,
        contact: "shivam@yahoo.com",
        content: 'This is a complaint',
        urgency: 4,
        timestamp: 1132,
    },
    {
        id: 4,
        userId: 4,
        diningHallId: 2,
        contact: "othergroupmember@yahoo.com",
        content: 'This is a complaint',
        urgency: 2,
        timestamp: 1132,
    },
    {
        id: 5,
        userId: 5,
        diningHallId: 3,
        contact: "vikash@yahoo.com",
        content: 'This is a complaint',
        urgency: 1,
        timestamp: 1132,
    },
    {
        id: 6,
        userId: 6,
        diningHallId: 5,
        contact: "pablo@yahoo.com",
        content: 'This is a complaint',
        urgency: 3,
        timestamp: 1132,
    }
    
]

export const RATINGS = [
    {
        id: 1,
        userId: 1,
        diningHallId: 5,
        type: 'food',
        rating: 5,
    },
    {
        id: 2,
        userId: 2,
        diningHallId: 3,
        type: 'traffic',
        rating: 1,
    },
    {
        id: 3,
        userId: 3,
        diningHallId: 2,
        type: 'food',
        rating: 2,
    },
    {
        id: 4,
        userId: 4,
        diningHallId: 1,
        type: 'food',
        rating: 4,
    },
    {
        id: 5,
        userId: 5,
        diningHallId: 3,
        type: 'traffic',
        rating: 3,
    },
    {
        id: 6,
        userId: 6,
        diningHallId: 0,
        type: 'food',
        rating: 3,
    },
    {
        id: 7,
        userId: 6,
        diningHallId: 0,
        type: 'food',
        rating: 5,
    },
    {
        id: 8,
        userId: 3,
        diningHallId: 4,
        type: 'food',
        rating: 3,
    },
    {
        id: 9,
        userId: 2,
        diningHallId: 0,
        type: 'traffic',
        rating: 5,
    },
    {
        id: 10,
        userId: 2,
        diningHallId: 0,
        type: 'traffic',
        rating: 3,
    },
    {
        id: 11,
        userId: 2,
        diningHallId: 0,
        type: 'food',
        rating: 5,
    },
    {
        id: 12,
        userId: 2,
        diningHallId: 0,
        type: 'traffic',
        rating: 5,
    },
]

export const COMMENTS = [
    {
        id: 1,
        userId: 1,
        diningHallId: 5,
        content: 'food was mid and dining hall is far away',
        timestamp: Date.now(),
    },
    {
        id: 2,
        userId: 2,
        diningHallId: 3,
        content: 'E',
        timestamp: Date.now(),
    },
    {
        id: 3,
        userId: 3,
        diningHallId: 2,
        content: 'This is a really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long comment about Rothschild',
        timestamp: Date.now(),
    },
    {
        id: 4,
        userId: 4,
        diningHallId: 1,
        content: 'wow acai bowls are so good',
        timestamp: Date.now(),
    },
    {
        id: 5,
        userId: 5,
        diningHallId: 3,
        content: 'B',
        timestamp: Date.now(),
    },
    {
        id: 6,
        userId: 6,
        diningHallId: 0,
        content: 'Rand is such a great dining hall!',
        timestamp: Date.now(),
    },
    {
        id: 7,
        userId: 7,
        diningHallId: 4,
        content: 'zeppos is cool',
        timestamp: Date.now(),
    },
    {
        id: 8,
        userId: 7,
        diningHallId: 3,
        content: 'I',
        timestamp: Date.now(),
    },
    {
        id: 9,
        userId: 6,
        diningHallId: 3,
        content: '<3',
        timestamp: Date.now(),
    },
    {
        id: 10,
        userId: 3,
        diningHallId: 3,
        content: 'vandy',
        timestamp: Date.now(),
    },
    {
        id: 11,
        userId: 3,
        diningHallId: 3,
        content: 'student',
        timestamp: Date.now(),
    },
    {
        id: 12,
        userId: 4,
        diningHallId: 3,
        content: 'gov',
        timestamp: Date.now(),
    },
    {
        id: 13,
        userId: 1,
        diningHallId: 3,
        content: 'and dining!',
        timestamp: Date.now(),
    },
]

export const USERS = [
    {
        id: 1,
        name: 'User 1',
        email: 'user1@yahoo.com',
    },
    {
        id: 2,
        name: 'User 2',
        email: 'user2@yahoo.com',
    },
    {
        id: 3,
        name: 'User 3',
        email: 'user3@yahoo.com',
    },
    {
        id: 4,
        name: 'User 4',
        email: 'user4@yahoo.com',
    },
    {
        id: 5,
        name: 'User 5',
        email: 'user5@yahoo.com',
    },
    {
        id: 6,
        name: 'User 6',
        email: 'user6@yahoo.com',
    },
    {
        id: 7,
        name: 'User 7',
        email: 'user7@yahoo.com',
    },
]