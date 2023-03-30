import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Main />

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pondok Pesantren Quran dan IT Al Mahir</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Copyright All right reserved
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default App;
