import React from "react";
import Video from "../components/AirpodsFirstVideo";
import LineUp from "../components/AirpodLineUp";
import ImageTile from "../components/AirpodsImageTile";
import AirpodsVideoBanner from "../components/AirpodsVideoBanner";
import AirpodsEarPods from "../components/AirpodsEarPods";
import HomeLineupSection from "../components/HomeLineupSection";
import HomeEssentialSection from "../components/HomeEssentialSection";
import Footer from "../components/ComponentFooter";

function AirPods() {
  return (
    <div>
      <Video />
      <LineUp />
      <ImageTile />
      <AirpodsVideoBanner />
      <AirpodsEarPods />
      <HomeLineupSection />
      <HomeEssentialSection />
      <Footer />
    </div>
  );
}

export default AirPods;
