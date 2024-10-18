import FormSection from './Components/FormSection';
import ProfileFrame from './Components/ProfileFrame';
import SideNavigationBar from './Components/SideNavigationBar';
import './App.css'

function App() {
  return (
    <div className="App">
      <SideNavigationBar/>
      <ProfileFrame/>
      <FormSection/>
    </div>
  );
}

export default App;
