import * as React from 'react';
import {List} from '@rmwc/list';
import {Store} from '../../../store/store';
import {DaysListElement} from './daysListElement';

import { observer } from 'mobx-react';

interface DayListProps{
    store:Store
    
};
@observer
export class DaysList extends React.Component<DayListProps,{}>{

    
    render(){
       
        const daysListItems = this.props.store.days.map((el:any,key:number)=>{
            if(key>0){
            return (
                <DaysListElement 
                dayName={el} 
                key={key} 
                celcius={this.props.store.temperature.length===0?0:this.props.store.temperature.slice()[key]}
                fahrenheit={this.props.store.temperature.length===0?0:(this.props.store.temperature.slice()[key]*9/5)+32}/>
            )}else{
                return null
            }
        });
        
        
        return(
            <List>
           {daysListItems}
            </List>
        )
    }
}

