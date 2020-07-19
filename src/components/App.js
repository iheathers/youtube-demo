import React from "react";

import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

const KEY = "AIzaSyCVxwOy_aIsaXMQLLauUJmDKg6UWaBiMFM";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount(){
    this.handleSearch("vox")
  }
  handleSearch = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video",
      },
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  render() {
    return (
      <div className="ui container margin">
        <SearchBar onSearch={this.handleSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="twelve wide column" >
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="four wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.handleVideoSelect}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
