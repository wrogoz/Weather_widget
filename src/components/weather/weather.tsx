import * as React from 'react';
import styled from 'styled-components';


export class Weather extends React.Component<{},{}>{
    render(){
        return(
            <WeatherContainer>
                <TopBox>
                    <CityName>New York, NY</CityName>
                    <p>Tuesday April 15th</p>
                    <p>Overcast</p>
                </TopBox>

                <SelectedDate>
                    <SelectedDateCol1>
                    img 58
                    </SelectedDateCol1>

                    <SelectedDateCol2>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </SelectedDateCol2>

                </SelectedDate>
                <div>
                    reszta pogody
                </div>
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
    font-size:32px;
    
    font-family: 'Roboto', sans-serif;
`

const SelectedDate = styled.div`
    display:flex;
`
const SelectedDateCol1 = styled.div`
    display:flex;
    width:50%;
`
const SelectedDateCol2 = styled.div`
    
`