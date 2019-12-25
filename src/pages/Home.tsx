import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/react";
import React, { createContext, useEffect, useReducer } from "react";
import { add } from "ionicons/icons";
import { RouteComponentProps } from "react-router";

import Donors from "./partials/Donors";
import { useLocalStorage } from "./hooks/useLocalStorage";

const initialState = {
  donors: []
};

export const AppContext = createContext({
  state: initialState,
  dispatch: (arg: any) => {}
});

const reducer = (state: any, action: any) => {
  if (action.type === "setDonors") {
    return { ...state, donors: action.donors };
  }
  return state;
};

const AppContextProvider = (props: any) => {
  const [data, setData] = useLocalStorage("data", initialState);

  let [state, dispatch] = useReducer(reducer, data);

  let value = { state, dispatch };

  useEffect(() => {
    setData(state);
  }, [state, setData]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

const Home: React.FC<RouteComponentProps> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Donors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <AppContextProvider>
          <Donors />
        </AppContextProvider>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonFabButton onClick={() => props.history.push("/new")}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
