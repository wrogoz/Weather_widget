import React from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react';
import {Weather} from './weather/weather';
import store,{Store} from '../store/store';


interface LayoutProps{
  store:Store
}

@observer
export class Layout extends React.Component<LayoutProps,{}>{
  
  render(){
    return(
      <MainPage>
        <Weather store={store}/>
      </MainPage>
    )
  }
}

const MainPage=styled.div`
  height:100vh;
  width:100vw;
  background-color:skyblue;
  font-family:'Roboto', sans-serif;
  
`


