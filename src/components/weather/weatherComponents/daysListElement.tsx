import * as React from 'react';
import styled from 'styled-components';
import {ListDivider} from '@rmwc/list'
import { observer } from 'mobx-react';


interface DayListItemData {
    dayName:String
    celcius:Number
    fahrenheit:Number
    pollen:Number
    icon:Object
}

@observer
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
                        {this.props.icon}
                        </InlineEl>

                        <TempInfo>
                            <TempInfoData>{this.props.fahrenheit} <sup>0</sup></TempInfoData>
                            <TempInfoData>{this.props.celcius} <sup>0</sup></TempInfoData>
                        </TempInfo>
                        <PollenInfo>
                            <PollenInfoData>Pollen</PollenInfoData>
                            <PollenInfoData>{this.props.pollen}</PollenInfoData>
                        </PollenInfo>
                        
                    </StyledDaysList>
                    <ListDivider/>
                </>
        )
    };
};


const StyledDaysList = styled.li`
    display:flex;
    align-items:center;
    height:10vh;
    padding-left:15px;
    @media (min-width: 460px) {
        height:100%;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        width:100%;
         padding-left:0;
    };
`
const InlineEl = styled.div`
    display:inline-block;
    width:25%;
    line-height: 20px;
    font-size:14px;
    text-align:center;
    @media (min-width: 460px) {
        display:flex;
        flex-direction:column;
        width:auto;
        line-height: 10px;
    };
`

const PollenInfo = styled.div`
    display:inline-block;
    width:25%;
    line-height: 20px;
    @media (min-width: 390px) {
        display:flex;
        justify-content:center;
        text-align:center;
    };
    
`
const PollenInfoData = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 15px;
    color:#aaa;
    &:first-of-type{
        color:#666;
        }
    @media (min-width: 390px) {
        margin:0 5px;
    };
    @media (min-width: 460px) {
        font-size:10px;
        margin:0 2px;
    };
`

const TempInfo = styled.div`
    display:inline-block;
    width:25%;
    line-height: 20px;
    @media (min-width: 415px) {
        display:flex;
        justify-content:center;
    };
`
const TempInfoData = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 15px;
    color:#aaa;
    margin:0 10px;
    &:first-of-type{
        color:#666;
    }
    @media (min-width: 415px) {
        display:flex;
        justify-content:center;
        line-height:4px;
    };
`