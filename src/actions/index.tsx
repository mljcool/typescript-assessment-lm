import { AppEvents } from "../events";
import { ActionCreatorsMapObject } from "redux";


type IActionPaylaod<ActionType extends string, ActionPayload> = {
  type: ActionType;
  payload: ActionPayload;
}
const ActionCreator = <Action extends string, P>(
  type: Action,
  payload: P
): IActionPaylaod<Action, P>  => ({ type, payload});


export const SetName = (name: string) => ActionCreator(AppEvents.SET_NAME, name);
export const SetAge = (age: number) => ActionCreator(AppEvents.SET_AGE, age);

export const SetOfActions = {
  SetAge,
  SetName,
};


type ActionUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

export type IAction = ActionUnion<typeof SetOfActions>;
