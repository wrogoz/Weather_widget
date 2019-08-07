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
                <DaysListElement dayName={el} key={key}/>
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

