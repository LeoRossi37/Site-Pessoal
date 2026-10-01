
import { Navbar,Business,Billing,Stats,Hero} 
from './components';
const App = () => {
  return(
    
  <div className="bg-primary w-full overflow-hidden"> 
        <Navbar/>
        <Hero/>
        <Stats/>
        <Business/>
        <Billing/>
       
    </div>

  ) 
}
    
export default App