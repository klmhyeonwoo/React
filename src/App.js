import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Composition } from './component/2-4 props/Composition';
import Extraction from './component/2-4 props/Extraction/Extraction';
import ClassComponent from './component/2-5 state/ClassComponent';
import ClassComponent2 from './component/2-6 LifeCycle/ClassComponent';
import FunctionalComponent from './component/2-5 state/FunctionalComponent';
import Event from './component/2-7 Event/Event';
import Condition from './component/2-8 ConditionalRendering/Condition';
import List from './component/2-9 List/List';
import Controlled from './component/2-10 Form/Controlled';
import Uncontrolled from './component/2-10 Form/Uncontrolled';
import State from './component/3-3 Hooks/State';
import Reducer from './component/3-3 Hooks/Reducer';
import Dialog from './component/3-6 Composition 2/Dialog';
import WelcomeDialog from './component/3-5 Composition/WelcomeDialog';
import ThankyouDialog from './component/3-6 Composition 2/ThankyouDialog';
import Input from './component/3-7 HOC/Input';
import Button from './component/3-7 HOC/Button';
import Click from './component/3-7 HOC/Click';
import Memo from './component/3-8 Memoization/Memo';
import Example from './component/3-11 Portal/Example';
import Component from './component/3-14 PropTypes/Component';


function App() {
  const [state, setState] = useState(() => {
    console.log("useState!");
  })

  useEffect(() => {
    console.log("useEffect!");
    setState(() => {
      console.log("useState 2!");
    })
  }, []);
  return (
    <div className="App">

      {/*<Composition/>
      <Extraction/>
      <ClassComponent/>
      <FunctionalComponent/>
      <ClassComponent2/>
      <Event/>
      <Condition/>
      <List/>
      <Controlled/> <br/>
      <Uncontrolled/>
      <State/>
      <Reducer/>
      */}
      {/* <WelcomeDialog />
      <Dialog />
      <ThankyouDialog /> */}
      {/* <Input />
      <Button />
      <Click /> */}
      {/* <Memo /> */}
      {/* <Example /> */}
      {/* <Component /> */}
      <Memo />
    </div>
  );
}

export default App;
