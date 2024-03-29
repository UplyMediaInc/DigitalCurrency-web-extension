import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainApp from './MainApp';
import Send from './views/Send';
import Buy from './views/Buy';
import Sell from './views/Sell';
import Dashboard from './views/Dashboard';
import Stake from './views/Stake';
import Swap from './views/Swap';
import Receive from './views/Receive';
import RequireAuth from './auth/RequireAuth';
import Login from './views/Login';
import Onboarding from './views/Onboarding';
import Register from './views/Register'
import Whitepaper from './views/Whitepaper';
import ComingSoon from './views/ComingSoon';
import RecoveryPhrase from './views/RecoveryPhrase';

function App() {
  return (
      <Routes>
        <Route element={<MainApp />}>
          <Route path="/" element={
                                <RequireAuth>
                                  <Dashboard /> 
                                </RequireAuth>
                              }/>
          <Route path='/buy' element={
                                    <RequireAuth>
                                        <Buy />
                                    </RequireAuth> 
                                  }/>
          <Route path='/sell' element={
                                      <RequireAuth>
                                        <Sell />
                                      </RequireAuth>
                                    }/>
          <Route path='/stake' element={
                                      <RequireAuth>
                                        <Stake />
                                      </RequireAuth>
                                     }/>
          <Route path='/swap' element={
                                      <RequireAuth>
                                         <Swap />
                                      </RequireAuth> 
                                      }/>
          <Route path='/send' element={
                                      <RequireAuth> 
                                        <Send /> 
                                      </RequireAuth>
                                     }/>
          <Route path='/receive' element={
                                        <RequireAuth>
                                           <Receive /> 
                                        </RequireAuth>
                                      }/>
          <Route path='/comingsoon' element={<ComingSoon/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/onboarding' element={<Onboarding/>}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/whitepaper' element={<Whitepaper/>}/>
          <Route path='/recoveryphrase' element={<RecoveryPhrase/>}/>
        </Route>
      </Routes>
  )
}

export default App