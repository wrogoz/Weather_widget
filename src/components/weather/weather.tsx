import * as React from 'react';
import styled from 'styled-components';

import {DaysList} from './daysList';
import {DateChoiceComp} from './dateChoiceComp';

export class Weather extends React.Component<{},{}>{
    render(){
        return(
            <WeatherContainer>
                <TopBox>
                    <CityName>New York, NY</CityName>
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

`
const Date = styled.div`
    
    color:#666;
    font-size:14px;
`
