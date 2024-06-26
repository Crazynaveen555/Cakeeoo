import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import SearchBox from './SearchBox';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/user-actions';

import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({ setShowLogin }) => {
    const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const history = useHistory();

	const logoutHandler = () => {
		dispatch(logout());
		history.push('/login');
	};

  

  return (
    
    <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light ">
              
              <LinkContainer to='/'>
						<a className='Brand navbar-brand pl-4'>Cakeoo</a>
					</LinkContainer>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dropdown
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link disabled" href="#">Disabled</a>
                      </li>
                      <Route render={({ history }) => <SearchBox history={history} />} />
            
                  </ul>
                  <ul class="navbar-nav ml-auto gap-0">
                    <li className='pt-1 nav-item active'>
                    <LinkContainer to='/cart'>
                          <a className='fas fa-shopping-cart nav-link cart'>Cart</a>
                      </LinkContainer>
                    </li>

                      {userInfo ? (<>
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle nav-link active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 {userInfo.name}
                              </a>
                              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <LinkContainer to='/profile'>
                                        <a class="dropdown-item nav-link">Profile</a>
									</LinkContainer>
                                    <div class="dropdown-divider"></div>
                                    <LinkContainer to='/favorites'>
                                        <a class="dropdown-item nav-link">Favorites</a>
									</LinkContainer>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" onClick={logoutHandler}>LogOut</a>
                              </div>
                          </li>



                      </>) : (
                          <LinkContainer to='/login'>

                              <i className='fas fa-user'></i>Sign In

                          </LinkContainer>
                      )}
                  </ul>
                  
                  
                  
              </div>
              
							
          </nav>
    </>
  )
}

export default Navbar
