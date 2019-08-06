import {observable} from 'mobx';

export class Store {

    @observable cityNames: any = [''];
    @observable menuItems:any = [];
    @observable city:string = 'Choose city';
    @observable selectedDate = '2019-07-25'
//---------------------------top box data------------------------------------
  
    @observable date:string | null="2019-07-26T00:00:00"
    @observable temperature:number | null=null;
    @observable precipitation:number | null=null
    @observable humidity:number | null=null
    //windInfo	
    @observable speed:number | null=	null
    @observable direction:string | null=null
    @observable pollenCount:number | null=null
    @observable type:string | null="RainLight"
    //-------------------------------------------------------------------------/
}


        
let store = new Store();
export default store;
