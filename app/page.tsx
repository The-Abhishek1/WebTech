import React from "react";
import TopLinks from "./Components/TopLinks";
import Header from "./Components/Header";
import FirstSlide from "./Components/FirstSlide";
import SecondSlide from "./Components/SecondSlide";
function Page() {
  return (
    <div>
      <TopLinks />
      <Header />
      <FirstSlide />
      <SecondSlide />
    </div>
  );
}

export default Page;
