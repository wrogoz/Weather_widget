import * as React from 'react';
import styled from 'styled-components';
import {SimpleMenu,MenuItem} from '@rmwc/menu';
import {DaysList} from './daysList';
import {DateChoiceComp} from './dateChoiceComp';

export class Weather extends React.Component<{},{}>{
    render(){
        return(
            <WeatherContainer>
                <TopBox>
                    
                        <SimpleMenu handle={<CityName>New York, NY</CityName>}>
                        <MenuItem>Katowice</MenuItem>
                        <MenuItem>Sosnowiec</MenuItem>
                        <MenuItem>Londyn</MenuItem>
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
