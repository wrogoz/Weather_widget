import * as React from 'react';
import styled from 'styled-components';
import {ListDivider} from '@rmwc/list'
import cloudy from './Assets/cloudy.png'


interface DayListItemData {
    dayName:String
}

export class DaysListElement extends React.Component<DayListItemData,{}>{
    render(){
        return(
                <>
                    <ListDivider/>
                    <StyledDaysList >
                        <InlineEl>
                            {this.props.dayName} 
                        </InlineEl>
                        
                        <InlineEl>
                        <img src={cloudy} alt="cloudy"/>
                        </InlineEl>

                        <InlineEl>
                        <StyledP>68 <sup>0</sup></StyledP>
                            <StyledP>36 <sup>0</sup></StyledP>
                        </InlineEl>
                        <InlineEl>
                            <StyledP>Pollen</StyledP>
                            <StyledP>36</StyledP>
                        </InlineEl>
                        
                    </StyledDaysList>
                    <ListDivider/>
                </>
        )
    }
}
const StyledDaysList = styled.li`
    display:flex;
    align-items:center;
    height:10vh;
    padding-left:15px;
`
const InlineEl = styled.div`
    display:inline-block;
    width:25%;
    line-height: 20px;
`

const StyledP = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 15px;
    color:#aaa;
`