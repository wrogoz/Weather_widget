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

        
        return(
            <List>
           <DaysListElement dayName={this.props.store.days[1]}/>
           <DaysListElement dayName={this.props.store.days[2]}/>
           <DaysListElement dayName={this.props.store.days[3]}/>
           <DaysListElement dayName={this.props.store.days[0]}/>
          

            
        </List>
        )
    }
}

