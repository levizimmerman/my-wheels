import React, { useMemo, useReducer } from "react";

type Props = {
  children: React.ReactNode;
};

type CarSelectionData = {
  registrationPlate: string; // this will be the ID of the car
  coords: {
    latitude: number;
    longitude: number;
  };
};

type CarSelectionApi = {
  setCarSelection: (carSelection: CarSelectionData) => void;
  clearCarSelection: () => void;
};

export type State = CarSelectionData | null;

const defaultState: State = null;

export enum ActionType {
  SetCarSelection,
  ClearCarSelection,
}

type ActionSetCarSelection = {
  type: ActionType.SetCarSelection;
  payload: CarSelectionData;
};

type ActionClearCarSelection = {
  type: ActionType.ClearCarSelection;
};

export type Action = ActionSetCarSelection | ActionClearCarSelection;

export const CarSelectionDataContext = React.createContext<State>(null);
export const CarSelectionApiContext = React.createContext<CarSelectionApi>({
  setCarSelection: () => {},
  clearCarSelection: () => {},
});

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SetCarSelection: {
      return action.payload;
    }
    case ActionType.ClearCarSelection: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const CarSelectionProvider: React.FC<Props> = ({ children }) => {
  const [carSelection, dispatch] = useReducer(reducer, defaultState);

  const api = useMemo(() => {
    return {
      setCarSelection: (car: CarSelectionData) => {
        dispatch({ type: ActionType.SetCarSelection, payload: car });
      },
      clearCarSelection: () => {
        dispatch({ type: ActionType.ClearCarSelection });
      },
    };
  }, []);

  return (
    <CarSelectionDataContext.Provider value={carSelection}>
      <CarSelectionApiContext.Provider value={api}>
        {children}
      </CarSelectionApiContext.Provider>
    </CarSelectionDataContext.Provider>
  );
};

export default CarSelectionProvider;
