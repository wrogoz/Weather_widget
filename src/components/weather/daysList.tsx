import * as React from 'react';
import styled from 'styled-components';
import {ListDivider,List, ListItem} from '@rmwc/list'
import cloudy from './Assets/cloudy.png'

export class DaysList extends React.Component<{},{}>{
    render(){
        return(
            <List>
            <ListDivider/>
            <StyledDaysList>
                <InlineEl>
                    Today 
                </InlineEl>
                
                <InlineEl>
                <img src={cloudy} alt="cloudy"/>
                </InlineEl>

                <InlineEl>
                    temp
                </InlineEl>
                <InlineEl>
                    <p>Pollen</p>
                    <p>36</p>
                </InlineEl>
                
            </StyledDaysList>
            <ListDivider/>
            
        </List>
        )
    }
}

const StyledDaysList = styled(ListItem)`
  
    height:10vh;
`
const InlineEl = styled.div`
    display:inline-block;
    width:25%;
`