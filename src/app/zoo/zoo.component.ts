import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddAnimal, DeleteAnimal, GetAnimal, ResetAnimals } from '../store/animal.actions';
import { Observable } from 'rxjs';
import { ZooStateModel, ZooState } from '../store/animal.state';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent {
  animalsNames: any;

  //selects a state slice from store
  @Select(ZooState.getAnimalNameSelector) animalName$:
    | Observable<String>
    | undefined;

  constructor(private store: Store) {
    this.animalName$?.subscribe((res: any) => {
      console.log(res);
      this.animalsNames = res;
    });
  } //create instance of Store class

  ngOnInit(): void {}

  addAnimal(animalName: string) {
    this.store.dispatch(new AddAnimal(animalName)); //trigger action when button is clicked
  }

  deleteAnimal(animalName: string) {
    this.store.dispatch(new DeleteAnimal(animalName)); //trigger action when button is clicked
  }

  resetAnimals(){
    this.store.dispatch(new ResetAnimals()); //trigger action when button is clicked
  }

  /*
  getAnimal() {
    this.store.dispatch(new GetAnimal()); //trigger action when button is clicked
  }
  */
}
