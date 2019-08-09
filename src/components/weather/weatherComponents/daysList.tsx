import * as React from 'react';
import {List} from '@rmwc/list';
import {Store} from '../../../store/store';
import {DaysListElement} from './daysListElement';
import Cloudy from '../Assets/Cloudy.png'
import PartlyCloudy from '../Assets/PartlyCloudy.png'
import RainLight from '../Assets/RainLight.png'
import Sunny from '../Assets/Sunny.png'
import RainAndCloudy from '../Assets/RainAndCloudy.png'
import { observer } from 'mobx-react';
import styled from 'styled-components';
interface DayListProps{
    store:Store
    
};
@observer
export class DaysList extends React.Component<DayListProps,{}>{

    componentDidMount(){
        
    }
    render(){
       
        const daysListItems = this.props.store.days.map((el:any,key:number)=>{
            if(key>0){
            let icon:any= ()=>{
                    switch (this.props.store.type.slice()[key]) {
                      case 'Cloudy': return Cloudy;
                       
                        case 'Sunny': return Sunny;
                      
                        case 'RainLight': return RainLight;
                     
                        case 'RainAndCloudy': return RainAndCloudy;
                     
                        case 'PartlyCloudy': return PartlyCloudy;
                       
                    }
                }
                  
            return (
                <DaysListElement 
                dayName={el} 
                key={key} 
                celcius={this.props.store.temperature.length===0?0:this.props.store.temperature.slice()[key]}
                fahrenheit={this.props.store.temperature.length===0?0:Math.floor(this.props.store.temperature.slice()[key]*9/5)+32}
                pollen={this.props.store.pollenCount.length===0?0:this.props.store.pollenCount.slice()[key]}
                icon={this.props.store.type.length===0? <img src={Sunny} alt=""/>:<img src={icon()} alt="" />}/>
            )}else{
                return null
            }
        });
        
        
        return(
            <ListContainer>
           {daysListItems}
            </ListContainer>
        )
    }
}
const ListContainer=styled(List)`
    @media (min-width: 460px) {
        
        height:150px;
        display:flex;
        width:100%;
    };
`
