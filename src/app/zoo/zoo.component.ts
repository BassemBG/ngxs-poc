import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal } from '../store/animal.actions';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent {
  constructor(private store: Store) {} //create instance of Store class

  ngOnInit(): void {}

  addAnimal(animalName: string) {
    this.store.dispatch(new AddAnimal(animalName)); //trigger action when button is clicked
  }

 
}
