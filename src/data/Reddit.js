const data = {
    posts: {
        '1': {
            id: '1',
            title: 'Example Title 1',
            likeCount: 27.8,
            src: './images/example image 1.jpg',
            user: 'RandomUser1',
            timestamp: '8 minutes',
            commentCount: '245',
        },

        '2': {
            id: '2',
            title: 'Example Title 2',
            likeCount: 28.5,
            src: './images/example image 2.jpg',
            user: 'RandomUser2',
            timestamp: '10 minutes',
            commentCount: '345'
        },

        '3': {
            id: '3',
            title: 'Example Title 3',
            likeCount: 30,
            src: './images/example image 3.jpg',
            user: 'RandomUser3',
            timestamp: '20 hours',
            commentCount: '459'
        }
    }
}

export const jsonData = JSON.stringify(data);

// console.log(JSON.parse(jsonData));
// console.log(jsonData);