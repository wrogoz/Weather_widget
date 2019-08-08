import {observable} from 'mobx';

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
}


        
let store = new Store();
export default store;
