import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddAnimal, GetAnimal } from '../store/animal.actions';
import { Observable } from 'rxjs';
import { ZooStateModel, ZooState } from '../store/animal.state';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent {
  animalsNames : any;

  //selects a state slice from store
  @Select(ZooState.getAnimalNameSelector) animalName$:
    | Observable<String>
    | undefined;
    
  constructor(private store: Store) {
    this.animalName$?.subscribe( (res: any) => {
      console.log(res);
      this.animalsNames = res;
      
    })
  } //create instance of Store class

  ngOnInit(): void {}

  addAnimal(animalName: string) {
    this.store.dispatch(new AddAnimal(animalName)); //trigger action when button is clicked
  }

  /*
  getAnimal() {
    this.store.dispatch(new GetAnimal()); //trigger action when button is clicked
  }
  */
}
