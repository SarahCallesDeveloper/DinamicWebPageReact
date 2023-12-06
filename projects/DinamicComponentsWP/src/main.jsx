import React from 'react'
import ReactDOM from 'react-dom/client'
import { TextDiv, NavLink, Logo } from './AtomicComponents.JSX';
import App from './App.jsx'
import { NavBar } from './ComplexComponents.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
  <NavBar>  
      <NavLink>
      <TextDiv>
          navlink por fuera
        <Logo />
        </TextDiv>
      </NavLink>
      <TextDiv>
          sin navlink
        <Logo />
        </TextDiv>


      <TextDiv>
        normal
      </TextDiv>


   
      <NavLink>
      <TextDiv>
        <Logo />
        </TextDiv>
      </NavLink>
     
      <TextDiv>
        asdas
      </TextDiv>


      <TextDiv>
        asdas
      </TextDiv>
    </NavBar>


    <Logo></Logo>
    <App></App>

  </>
);