import {observable} from 'mobx';

export class Store {
    @observable api:any=[{date:"monday"},{date:"Tuesday"},{date:"Wendesday"},{date:"Thursday"},{date:"Friday"}];
    @observable cityNames: any = [''];
    @observable menuItems:any = [];
    @observable city:string = 'Choose city';
    @observable selectedDate = '2019-07-25'
    @observable days:any = ["monday","Tuesday", "wendesday","Thursday"]
//---------------------------top box data------------------------------------
  
  
    //-------------------------------------------------------------------------/
}


        
let store = new Store();
export default store;
