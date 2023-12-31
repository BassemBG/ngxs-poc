import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AnimalGetInterface } from '../model/AnimalGet.model';
import { AnimalAddInterface } from '../model/AnimalAdd.model';
import {
  AddAnimal,
  DeleteAnimal,
  GetAnimal,
  ResetAnimals,
} from './animal.actions';
import { Injectable } from '@angular/core';
import { patch, removeItem } from '@ngxs/store/operators';

//How i want the data to be set
export interface ZooStateModel {
  animalName: String[];
}

//we add this decorator to convert class to state
@State<ZooStateModel>({
  name: 'Zoo',
  //init
  defaults: {
    animalName: [],
  },
})
//state is injectable, behaves like a service
@Injectable()
export class ZooState {
  //selector decorator represents a slice of the state. I can select it from component
  @Selector()
  static getAnimalNameSelector(state: ZooStateModel) {
    //returns the array
    return state.animalName;
  }

  /*
    connects action with state. 
    In this case, state is waiting for GetAnimal action to be triggered.
    Equivalent of reducer in ngRx
    */
  @Action(AddAnimal)
  addAnimalStateAction(ctx: StateContext<ZooStateModel>, action: AddAnimal) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      animalName: [
        ...state.animalName,
        //add another name to the table
        action.name,
      ],
    });
  }

  @Action(DeleteAnimal)
  deleteAnimalStateAction(
    ctx: StateContext<ZooStateModel>,
    action: DeleteAnimal
  ) {
    ctx.setState(
      patch<ZooStateModel>({
        animalName: removeItem<String>((name) => name === action.name),
      })
    );
  }

  @Action(ResetAnimals)
  resetAnimalStateAction(ctx: StateContext<ZooStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      animalName: [],
    });
  }
}
