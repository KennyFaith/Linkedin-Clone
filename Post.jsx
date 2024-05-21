// import React from 'react'
import "./Post.css";
// import InputOption from "./InputOption";
// import {Avatar} from "@mui/icons-material/Avatar;"
import AccountCircleSharp from "@mui/icons-material/AccountCircleSharp";
// import ThumbsUpSharpIcon from "@mui/icons-material/ThumbUpSharpIcon";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        {/* <Avatar /> */}
        <AccountCircleSharp />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        {/* <InputOption Icon={ThumbsUpSharpIcon} title="Like" color="gray" />
        <InputOption Icon={ThumbsUpSharpIcon} title="Comment" color="gray" />
        <InputOption Icon={ThumbsUpSharpIcon} title="Share" color="gray" />
        <InputOption Icon={ThumbsUpSharpIcon} title="Send" color="gray" /> */}
      </div>
    </div>
  );
}

export default Post;
