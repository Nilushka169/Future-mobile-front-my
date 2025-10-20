import React, {useRef} from "react";
import { Box } from "@mui/material";
import LogoTextiPhone from "../components/IPhoneLogoText";
import QuiltedImageList from "../components/IPhoneImageTile";
import IphoneTypeTabs from "../components/IphoneTypeTabs";
import LatestIphone from "../components/IphoneLatestiPhone";
import IphoneAlliPhones from "../components/IphoneAlliPhones";
import HomeEssentialSection from "../components/HomeEssentialSection";
import IPhoneGetToKnow from "../components/IPhoneGetToKnow";
import Footer from "../components/ComponentFooter";

function IPhone() {
    const allPhonesRef = useRef(null);

  const scrollToAllPhones = () => {
    allPhonesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "white",
        margin: "0 auto",
      }}
    >
      <Box>
        <LogoTextiPhone />
      </Box>
      <Box>
        <QuiltedImageList />
      </Box>
      <Box>
        <IphoneTypeTabs onPhoneClick={scrollToAllPhones} />
      </Box>
      <Box>
        <LatestIphone />
      </Box>
      <Box>
        <IPhoneGetToKnow />
      </Box>
      <Box ref={allPhonesRef} sx={{ scrollMarginTop: { xs: 8, sm: 10 } }}>
        <IphoneAlliPhones />
      </Box>
      <Box>
        <HomeEssentialSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default IPhone;
