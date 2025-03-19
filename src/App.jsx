import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Newsbouard } from "./components/Newsboard"
function App() {
  const [category, setCategory]= useState("general");
  return (
   <div >
    <Navbar setCategory={setCategory} />
    <Newsbouard catogory={category}/>
   </div>)
}

export default App
