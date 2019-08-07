import * as React from 'react';
import styled from 'styled-components';
import {SimpleMenu,MenuItem} from '@rmwc/menu';
import {DaysList} from './weatherComponents/daysList';
import {DateChoiceComp} from './weatherComponents/dateChoiceComp';
import store,{Store} from '../../store/store';
import {observer} from 'mobx-react';
import axios from 'axios';
import  moment from 'moment';



interface WeatherProps {
    store:Store
}


@observer
export class Weather extends React.Component<WeatherProps,{}>{

   

    selectCity(event:any) {
        
        this.props.store.city=event;
       
        for (let i=0; i<this.props.store.cityNames.length; i++){

            if(this.props.store.cityNames[i].name.indexOf(event)!==-1){
                
                axios.get(`https://dev-weather-api.azurewebsites.net/api/city/${this.props.store.cityNames[i].id}/weather?date=${this.props.store.selectedDate}`)
                .then( (res:any) => {
                    this.props.store.api=(res.data);
                    
                    this.props.store.days[1]=moment(this.props.store.api[1].date).format("dddd");
                  
                  
                    
                })
           
                
                
                .catch( (error) => {
               
                console.log(error);
                })
            }
        }
    }

    componentDidMount(){

         // Api GET city list 

         axios.get('https://dev-weather-api.azurewebsites.net/api/city')
            .then( (res:any) => {
        
                this.props.store.cityNames=res.data 
                this.props.store.menuItems = this.props.store.cityNames.map((el:any,id:number)=>{
                return (
                    <MenuItem onClick={this.selectCity.bind(this, `${el.name}`)} key={id} >{el.name}</MenuItem>
                )
                })
            })
            .catch( (error) => {
            console.log(error);
            })
         
    }
    render(){
       
        return(
            <WeatherContainer>
                <TopBox>
                        <SimpleMenu handle={<CityName>{this.props.store.city}</CityName>}>
                            {this.props.store.menuItems}
                        </SimpleMenu>
                    <Date>Tuesday April 15th</Date>
                    <Date>Overcast</Date>
                </TopBox>
                <DateChoiceComp store={store}/>
               <DaysList store={store}/>
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
    cursor: pointer;

`
const Date = styled.div`
    
    color:#666;
    font-size:14px;
`
