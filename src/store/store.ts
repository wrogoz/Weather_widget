import {observable} from 'mobx';
import axios from 'axios';
import moment from 'moment';

export class Store {
    @observable api:any=[''];
    @observable cityNames: any = [''];
    @observable menuItems:any = [];
    @observable city:string = 'Choose city';
    @observable selectedDate:string = '2019-07-25'
    @observable days:any = ["monday","Tuesday", "wendesday","Thursday","Friday"]
//---------------------------top box data------------------------------------
  
    @observable date:string[] | null=["2019-07-26"]
    @observable temperature:number[] =[];
    @observable pollenCount:number[]  =[];
   //windInfo	
   @observable speed:number[]  =	[];
   @observable direction:string[] =[];
//---------------------------------------------------
  
    @observable type:string[]| null=["RainLight"];
    //-------------------------------------------------------------------------/
    getDataForCity = ()=>{
        for (let i=0; i<this.cityNames.length; i++){

            if(this.cityNames[i].name.indexOf(this.city)!==-1){
                
                axios.get(`https://dev-weather-api.azurewebsites.net/api/city/${this.cityNames[i].id}/weather?date=${this.selectedDate}`)
                .then( (res:any) => {

                    this.api=(res.data);

                    this.days=[];
                    this.temperature=[];
                    this.pollenCount=[];
                    this.speed=	[];
                    this.direction=	[];
                   
                    for(let i =0; i<this.api.length; i++){
                        this.days.push(moment(this.api[i].date).format("dddd"));
                        this.temperature.push(this.api[i].temperature);
                        this.pollenCount.push(this.api[i].pollenCount);
                        this.speed.push(this.api[i].windInfo.speed);
                        this.direction.push(this.api[i].windInfo.direction);
                    }
                })
                .catch( (error) => {
                console.log(error);
                })
            }
        }
    }
}


        
let store = new Store();
export default store;
