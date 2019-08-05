import {observable} from 'mobx';

export class Store {
   
    @observable introTxt: string = "Personal starter pack"

}

let store = new Store();
export default store;
