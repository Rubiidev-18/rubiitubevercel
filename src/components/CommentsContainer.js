import React from "react";

const commentsData = [
  {
    name: "Ajay Pagar",
    text: "This is a comment section you can see",
    replies: [
      {
        name: "Ajay Pagar",
        text: "This is a comment section you can see",
        replies: [
          {
            name: "Ajay Pagar",
            text: "This is a comment section you can see",
            replies: [
              {
                name: "Ajay Pagar",
                text: "This is a comment section you can see",
                replies: [
                  {
                    name: "Ajay Pagar",
                    text: "This is a comment section you can see",
                    replies: [
                      {
                        name: "Ajay Pagar",
                        text: "This is a comment section you can see",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Ajay Pagar",
                text: "This is a comment section you can see",
                replies: [],
              },
              {
                name: "Ajay Pagar",
                text: "This is a comment section you can see",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Ajay Pagar",
        text: "This is a comment section you can see",
        replies: [
          {
            name: "Ajay Pagar",
            text: "This is a comment section you can see",
            replies: [
              {
                name: "Ajay Pagar",
                text: "This is a comment section you can see",
                replies: [],
              },
            ],
          },
          {
            name: "Ajay Pagar",
            text: "This is a comment section you can see",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ajay Pagar",
    text: "This is a comment section you can see",
    replies: [
      {
        name: "Ajay Pagar",
        text: "This is a comment section you can see",
        replies: [
          {
            name: "Ajay Pagar",
            text: "This is a comment section you can see",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ajay Pagar",
    text: "This is a comment section you can see",
    replies: [],
  },
  {
    name: "Ajay Pagar",
    text: "This is a comment section you can see",
    replies: [],
  },
  {
    name: "Ajay Pagar",
    text: "This is a comment section you can see",
    replies: [],
  },
  {
    name: "Ajay Pagar",
    text: "This is a comment section you can see",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex m-2 p-1 rounded-md items-center shadow-md bg-gray-100">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  // Dont use indexes as keys
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index} >
            <Comment data={comment} />
            <div className="pl-6 border border-l-black">
              <CommentList comments={comment.replies}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
