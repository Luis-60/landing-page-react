import Navbar from "@/scenes/navbar/";
import { useState } from "react";

type SelectedPage = "home" | "benefits" | "ourclasses" | "contactus";

function App() {
  const [selectedPage, setSelectedPage] = useState<
  SelectedPage>("home");

  return (
    <div className="app bg-gray-200">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App
