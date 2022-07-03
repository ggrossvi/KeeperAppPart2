import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
/*
{
  key: 1,
  title: "Delegation",
  content:
    "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
},
*/
//console.log(note);

function App() {
  return (
    <div className="note">
      <Header />
      <Note
        key="1"
        title="Delegation"
        description="Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
      />
      <Footer />
    </div>
  );
}

export default App;
