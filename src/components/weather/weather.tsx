import * as React from 'react';
import styled from 'styled-components';
import {SimpleMenu,MenuItem} from '@rmwc/menu';
import {DaysList} from './weatherComponents/daysList';
import {DateChoiceComp} from './weatherComponents/dateChoiceComp';
import {Store} from '../../store/store';
import {observer} from 'mobx-react';



interface WheaterProps {
    store:Store
}


@observer
export class Weather extends React.Component<WheaterProps,{}>{

   

    selectCity = (event:any) =>{
        
        this.props.store.cityName=event;
        
    }

    render(){
        
        return(
            <WeatherContainer>
                <TopBox>
                    
                        <SimpleMenu handle={<CityName>{this.props.store.cityName}</CityName>}>
                        <MenuItem onClick={this.selectCity.bind(this, 'Katowice')}  >Katowice</MenuItem>
                        <MenuItem onClick={this.selectCity.bind(this, 'Sosnowiec')}  >Sosnowiec</MenuItem>
                        <MenuItem onClick={this.selectCity.bind(this, 'London')}  >Londyn</MenuItem>
                        </SimpleMenu>

                    <Date>Tuesday April 15th</Date>
                    <Date>Overcast</Date>
                </TopBox>

                <DateChoiceComp/>
               <DaysList/>
            </WeatherContainer>
        )
    }
}

const WeatherContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background-color:#fff;
    padding-top:5%;

`
const TopBox = styled.div`
    padding-left:5%;
`
const CityName = styled.div`
    font-size:36px;
    cursor: pointer;

`
const Date = styled.div`
    
    color:#666;
    font-size:14px;
`
