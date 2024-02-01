import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import Navbar from './components/Navbar';
import SummaryScreen from './components/screens/SummaryScreen';
import HomeScreen from './components/screens/HomeScreen';
import "./App.css"

const App = () => {

    return (
        <div>
            <Router>
                <Navbar />
                <ShowList />
                <div classname='container'>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/summary" element={<SummaryScreen />} />
                    </Routes>
                </div>

            </Router>

        </div>

    )
}
export default App;
