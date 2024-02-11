import React from "react"

const commentsData = [
  {
    name: "Supriya Gupta",
    text: "Wow, it's a beautiful video",
    replies: [],
  },
  {
    name: "Dheeraj Sawlani",
    text: "Loved it, totally",
    replies: [
      {
        name: "Meghna Gupta",
        text: "Please share more informative videos like this",
        replies: [],
      },
      {
        name: "Garima Saxena",
        text: "The content should have more deep information",
        replies: [
          {
            name: "Shreya Chaudhary",
            text: "Mind blowing, fabalous, fantastic",
            replies: [
              {
                name: "Iram Warsi",
                text: "So beautiful, so elegant, just looking like a vow",
                replies: [
                  {
                    name: "Govind Gupta",
                    text: "Please share more informative videos like this",
                    replies: [
                      {
                        name: "Nikita Singhal",
                        text: "Can you please share video of some other city? /maybe Lko",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Smriti Saxena",
                    text: "I really enjoy such content",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bini Agarwal",
    text: "Can you please share video of some other city?",
    replies: [],
  },
  {
    name: "Devyani Brokar",
    text: "I watch your videos regularly",
    replies: [],
  },
  {
    name: "Sunny Kashyap",
    text: "I love the dress this girl is wearing",
    replies: [],
  },
  {
    name: "Shobhit Gupta",
    text: "The content should have more deep information",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer