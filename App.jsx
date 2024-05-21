import "./App.css";
import Feed from "./Feed.jsx";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

function App() {
  return (
    <div className="app">
      {/* <h1>Lets Build A LinkedIn Clone Project</h1> */}

      {/* {Header} */}
      <Header />
      {/* {App Body} */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* {Sidebar} */}
      {/* {Feed */}
      {/* {Widgets} */}
    </div>
  );
}

export default App;
