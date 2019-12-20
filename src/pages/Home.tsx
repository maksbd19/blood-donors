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
import React from "react";
import { add } from "ionicons/icons";
import { RouteComponentProps } from "react-router";

const Home: React.FC<RouteComponentProps> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accounts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{" "}
          will be your guide.
        </p>
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
