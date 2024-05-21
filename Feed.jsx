// import React from 'react'
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import PhotoCameraSharpIcon from "@mui/icons-material/PhotoCameraSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import EventNoteSharpIcon from "@mui/icons-material/EventNoteSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";

function Feed() {
  const [posts, setposts] = useState([]);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateSharpIcon />
          <form>
            <input type="text" placeholder="Start A Post" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption
            Icon={PhotoCameraSharpIcon}
            title="Photo"
            color="#70B5F9"
          />
          <InputOption
            Icon={SubscriptionsSharpIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOption
            Icon={EventNoteSharpIcon}
            title="Event"
            color="#C0CBCD"
          />
          <InputOption
            Icon={CalendarMonthSharpIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {posts.map(() => )}
      <Post
        name="KennyFaith"
        description="This is a test"
        message=" WOW this worked"
      />
    </div>
  );
}

export default Feed;
