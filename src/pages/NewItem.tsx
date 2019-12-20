import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";

import DonorForm from "./general/DonorForm";

const NewItem: React.FC<RouteComponentProps> = props => {
  const redirectToHome = () => {
    return props.history.push("/home");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Add New Donor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-end">
        <DonorForm onSaveDonor={redirectToHome} />
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
