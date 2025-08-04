// Mock data for blog website

// Data for global state store
export const mockStore = {
  user: {
    id: 1,
    username: "emilys",
    email: "emily.johnson@x.dummyjson.com",
    firstName: "Emily",
    lastName: "Johnson",
    image: "https://i.pravatar.cc/150?img=1",
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  isAuthenticated: true
};

// Data returned by API queries
export const mockQuery = {
  posts: [
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on anyone. But the problem was, he was now in a situation where others were looking down on him. He was trying to work his way out of the situation, but it was a struggle. It made him wonder if his mother's advice was wrong.",
      tags: ["history", "american", "crime"] as const,
      reactions: {
        likes: 192,
        dislikes: 25
      },
      views: 305,
      userId: 121
    },
    {
      id: 2,
      title: "He was an expert but not in a discipline",
      body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to give it the most pleasing shape. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      tags: ["french", "fiction", "english"] as const,
      reactions: {
        likes: 859,
        dislikes: 32
      },
      views: 4884,
      userId: 91
    },
    {
      id: 3,
      title: "Dave watched as the forest burned up on the hill",
      body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed.",
      tags: ["magical", "history"] as const,
      reactions: {
        likes: 1448,
        dislikes: 39
      },
      views: 4152,
      userId: 1
    }
  ],
  comments: [
    {
      id: 1,
      body: "This is some awesome thinking!",
      postId: 1,
      likes: 4,
      user: {
        id: 63,
        username: "eburras1q"
      }
    },
    {
      id: 2,
      body: "What terrific math skills you're showing!",
      postId: 1,
      likes: 7,
      user: {
        id: 71,
        username: "omarsland1y"
      }
    }
  ]
};

// Data passed as props to the root component
export const mockRootProps = {
  initialRoute: "/login" as const
};