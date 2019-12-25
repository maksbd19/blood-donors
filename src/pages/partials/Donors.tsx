import React, { useCallback, useContext, useEffect } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import {
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import { pulse } from "ionicons/icons";
import { useCollection } from "react-firebase-hooks/firestore";

import { AppContext } from "./../Home";
import { donorDB } from "./../../App";
import { DonorBloodGroup } from "../components/DonorBloodGroup";

interface iDonor {
  name: string;
  ["blood-group"]: string;
  avatar: string;
}

const Donors = (props: any) => {
  const { state, dispatch } = useContext(AppContext);

  const [value, loading, error] = useCollection(
    donorDB.orderBy("createdOn", "desc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const doDelete = (id: any) => {
    donorDB.doc(id).delete();
  };

  // const fetchDonors = useCallback(async () => {
  //   const ret = await fetch("./assets/donors.json");
  //   const json = await ret.json();

  //   dispatch({
  //     type: "setDonors",
  //     donors: json
  //   });
  // }, [dispatch]);

  // useEffect(() => {
  //   fetchDonors();
  // }, [fetchDonors]);

  if (!value || !value.docs || value.docs.length === 0) {
    return (
      <IonGrid className="ion-align-items-center">
        <IonRow className="ion-justify-content-center">
          <IonCol size="auto">
            <IonIcon size="large" icon={pulse} color="danger"></IonIcon>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <h5>No donor found.</h5>
          </IonCol>
        </IonRow>
      </IonGrid>
    );
  }

  return (
    <React.Fragment>
      <IonList>
        {value &&
          value.docs.map((doc: any) => {
            const donor: iDonor = doc.data();
            return (
              <IonItem key={doc.id}>
                <IonAvatar slot="start">
                  <img src={donor.avatar} alt={donor.name} />
                </IonAvatar>

                <IonLabel text-wrap>
                  <h3>{donor.name}</h3>
                  <DonorBloodGroup bg={donor["blood-group"]} />
                </IonLabel>

                <IonIcon slot="end" name="videocam"></IonIcon>
              </IonItem>
            );
          })}
      </IonList>
    </React.Fragment>
  );
};

export default Donors;
