import './index.css'
import Profile from './components/Profile'
import Info from './components/Info'
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

function App() {

  return (
    <div>
      <FlickeringGrid maxOpacity={0.05} squareSize={3} className="fixed -z-10" />
      <div className='flex xl:flex-row flex-col xl:justify-center xl:items-start items-center gap-10'>
        <Profile />
        <Info />
      </div>
    </div>
  )
}

export default App