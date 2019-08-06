import * as React from 'react';

import {List} from '@rmwc/list';

import {DaysListElement} from './daysListElement';


export class DaysList extends React.Component<{},{}>{
    render(){
        return(
            <List>
           <DaysListElement dayName="Today"/>
           <DaysListElement dayName="Tuesday"/>
           <DaysListElement dayName="Wendesday"/>
           <DaysListElement dayName="Thursday"/>
           <DaysListElement dayName="Friday"/>

            
        </List>
        )
    }
}

