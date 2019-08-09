import {observable} from 'mobx';
import axios from 'axios';
import moment from 'moment';

export class Store {
    @observable api:any=[''];
    @observable cityNames: any = [''];
    @observable menuItems:any = [];
    @observable city:string = 'Choose city';
    @observable actualDate:any = moment().format('YYYY-MM-DD');
    @observable dateToDisplay:string=moment().format('dddd, MMMM Do').toString();
    @observable days:any = ["Monday","Tuesday", "Wendesday","Thursday","Friday"]
    @observable temperature:number[]  =[];
    @observable pollenCount:number[]  =[];
    @observable type:string[]=[];
   //windInfo	
    @observable speed:number[]  =	[];
    @observable direction:string[] =[];

    getDataForCity = ()=>{
        for (let i=0; i<this.cityNames.length; i++){

            if(this.cityNames[i].name.indexOf(this.city)!==-1){
                
                axios.get(`https://dev-weather-api.azurewebsites.net/api/city/${this.cityNames[i].id}/weather?date=${this.actualDate}`)
                .then( (res:any) => {

                    this.api = (res.data);
                    this.days = [];
                    this.temperature = [];
                    this.pollenCount = [];
                    this.speed = [];
                    this.direction = [];
                    this.type = [];
                   
                    for(let i =0; i<this.api.length; i++){
                        this.days.push(moment(this.api[i].date).format("dddd"));
                        this.temperature.push(this.api[i].temperature);
                        this.pollenCount.push(this.api[i].pollenCount);
                        this.speed.push(this.api[i].windInfo.speed);
                        this.direction.push(this.api[i].windInfo.direction);
                        this.type.push(this.api[i].type)
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
