
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Netflix from './Netflix';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Netflix' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App