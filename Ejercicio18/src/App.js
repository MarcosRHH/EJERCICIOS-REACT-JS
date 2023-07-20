import { BrowserRouter , Route, Switch, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';
import NotFoundPage from './pages/404/NotFoundPage';

import { useState , useEffect } from 'react';
/* import { Link } from '@mui/material'; */
import './index.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log('Este es el useEffect 1'+localStorage.getItem('credentials'));
    if (localStorage.getItem('credentials') !== null) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  const logOut = () => {
    console.log('Ejecutandose el boton logOut');
    localStorage.removeItem('credentials');
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <div>
        <nav className='d-flex justify-content-left p-3' style={{ width: '30%' }}>
          <Link to='/' className='nav-link'>|  HOME  |  </Link>
          <Link from='/' to='/login' className='nav-link'>|  LOGIN  |  </Link>
          <Link to='/register' className='nav-link'>|  REGISTER  |  </Link>
          <Link to='/tasks' className='nav-link'>|  TASKS  |  </Link>
        </nav>

        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route
            exact
            path='/login'
            render={() => {
                if (loggedIn) {
                  return (
                    <div>
                      <h2>You have already logged</h2>
                      <Link from='/' to='/login'>
                        <Button variant='contained' onClick={logOut} >Log out</Button>
                      </Link>
                    </div>
                  )
                } else {
                  return  <LoginPage setLoggedIn={setIsAuthenticated} />
                }
              }
            }
            />
            <Route exact path='/register' component={RegisterPage} />
            <Route
            exact
            path='/tasks'
            render={() => {
                if (loggedIn) {
                  return <TasksPage />;
                } else {
                  return (
                    <div>
                      <h2>You must have log in first...</h2>
                      <div className='d-flex justify-content-evenly w-25'>
                        <Link from='/' to='/login' >
                            <Button variant='contained' >Log in</Button>
                        </Link>
                        <Link from='/' to='/register' >
                            <Button variant='contained' >Register</Button>
                        </Link>
                      </div>
                    </div>
                  )
                }
              }
            }
            />
            {/* 404 - Page No Found */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
