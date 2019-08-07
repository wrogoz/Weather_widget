import * as React from 'react';
import styled from 'styled-components';
import cloudy from '../Assets/cloudy.png';
import {Store } from '../../../store/store';
import {observer} from 'mobx-react';
interface DateChoiceProps{
    store:Store
}


@observer
export class DateChoiceComp extends React.Component<DateChoiceProps,{}>{
    render(){
        return(
            <SelectedDate>
                <SelectedDateCol1>
                    <Col1Img src={cloudy} alt="cloudy"/>
                    <Col1Temp>
                    <Col1TempVal>{this.props.store.api[0].temperature}</Col1TempVal>
                    <Styledsup><sup>o</sup>F</Styledsup>
                    </Col1Temp> 
                </SelectedDateCol1>

                <SelectedDateCol2>
                    <Col2Data>
                        <NameLi>Precipitation:<DataLi>{this.props.store.api[0].precipitation}%</DataLi> </NameLi> 
                        <NameLi>Humidity:<DataLi>{this.props.store.api[0].humidity}%</DataLi> </NameLi> 
                        <NameLi>Wind:<DataLi> {this.props.store.api[0].speed} {this.props.store.api[0].direction} </DataLi> </NameLi> 
                        <NameLi>Pollen Count:<DataLi>{this.props.store.api[0].pollenCount}</DataLi> </NameLi> 
                    </Col2Data>
                </SelectedDateCol2>

</SelectedDate>
        )
    }
}


const SelectedDate = styled.div`
    display:flex;
  
   
`
const SelectedDateCol1 = styled.div`
    display:flex;
  
    padding: 0 0 0 12px;
    margin:top:10%;
    
`
const Col1Img = styled.img`
    width:68px;
    height:64px;
`
const Col1Temp = styled.div`
    font-size:24px;
    width:50%;
    text-align:center;
    margin:0;
    padding-top:5px;
    
`
const Col1TempVal = styled.span`
    padding-top:2px;
    height:100%;
    font-size:30px;
`
const Styledsup = styled.sup`
    font-size:19px;
    padding-left:2px;
    color:#aaa;
   
`
const SelectedDateCol2 = styled.div`
  
    margin:top:10%;
    width:50%;
    margin:0 auto;
    
`

const Col2Data = styled.ul`
    list-style:none;
    font-size:14px;
    padding-left:0;
    margin:0;
    
    
`
const NameLi = styled.li`
    color:#aaa;
`
const DataLi = styled.span`
    color:#666;
    padding-left: 4px;
    line-height:20px;
`

