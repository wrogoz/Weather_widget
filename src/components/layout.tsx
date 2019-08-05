import React from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react';
import {Weather} from './weather/weather';


interface prepper{
  store:string;
}
@observer
export class Layout extends React.Component<prepper,{}>{
  
  render(){
    return(
      <MainPage>
        <Weather/>
      </MainPage>
    )
  }
}

const MainPage=styled.div`
  height:100vh;
  width:100vw;
  background-color:skyblue;
  
`


