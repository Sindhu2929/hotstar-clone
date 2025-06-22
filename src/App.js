import React, { useState } from "react";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import VideoCarousel from "./components/VideoCarousel";
import VideoPreviewModal from "./components/VideoPreviewModal";
import videos from "./data/videos.json";
import "./App.css";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const categories = ["All", ...new Set(videos.map(video => video.category))];

  const videosByCategory = (category) => {
    if (category === "All") {
      return {
        "Trending": videos.filter(video => video.category === "Trending"),
        "Continue Watching": videos.filter(video => video.category === "Continue Watching"),
        "Action": videos.filter(video => video.category === "Action"),
        "Comedy": videos.filter(video => video.category === "Comedy"),
      };
    }
    return {
      [category]: videos.filter(video => video.category === category)
    };
  };

  const carousels = videosByCategory(selectedCategory);

  return (
    <div className="App">
      <Header />
      <div style={{ padding: "20px" }}>
        <CategoryTabs categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        {Object.entries(carousels).map(([title, videoList]) => (
          <VideoCarousel key={title} title={title} videos={videoList} onCardClick={handleCardClick} />
        ))}
      </div>
      <VideoPreviewModal video={selectedVideo} open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
}

export default App;
