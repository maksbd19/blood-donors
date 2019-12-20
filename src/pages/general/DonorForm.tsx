import {
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonRow,
  IonCol,
  IonAlert
} from "@ionic/react";
import React, { useState, PropsWithChildren } from "react";

const DonorForm: React.FC<PropsWithChildren<any>> = ({ onSaveDonor }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({});

  const saveForm = () => {
    console.log(data);
    //  validate required fields
    setShowAlert(true);
  };

  const handleSuccessOkay = () => {
    return onSaveDonor();
  };

  const handleChange = (target: any) => {
    (data as any)[target.name] = target.value;
    setData(data);
  };

  const getData = (target: string) => {
    return data.hasOwnProperty(target) ? (data as any)[target] : "";
  };

  return (
    <React.Fragment>
      <IonItem>
        <IonLabel position="floating">Name</IonLabel>
        <IonInput
          name="name"
          value={getData("name")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Blood Group</IonLabel>
        <IonSelect
          okText="Okay"
          cancelText="Dismiss"
          name="blood-group"
          value={getData("blood-group")}
          onIonChange={e => handleChange(e.target as HTMLSelectElement)}
        >
          <IonSelectOption value="a-positive">A (+ve)</IonSelectOption>
          <IonSelectOption value="a-negetive">A (-ve)</IonSelectOption>
          <IonSelectOption value="b-positive">B (+ve)</IonSelectOption>
          <IonSelectOption value="b-negetive">B (-ve)</IonSelectOption>
          <IonSelectOption value="o-positive">O (+ve)</IonSelectOption>
          <IonSelectOption value="o-negetive">O (-ve)</IonSelectOption>
          <IonSelectOption value="ab-positive">AB (+ve)</IonSelectOption>
          <IonSelectOption value="ab-negetive">AB (-ve)</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Gender</IonLabel>
        <IonSelect
          okText="Okay"
          cancelText="Dismiss"
          name="gender"
          value={getData("gender")}
          onIonChange={e => handleChange(e.target as HTMLSelectElement)}
        >
          <IonSelectOption value="male">Male</IonSelectOption>
          <IonSelectOption value="female">Female</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Address</IonLabel>
        <IonTextarea
          auto-grow="true"
          name="address"
          value={getData("address")}
          onIonChange={e => handleChange(e.target as HTMLTextAreaElement)}
        ></IonTextarea>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Contact Number</IonLabel>
        <IonInput
          name="contact-number"
          value={getData("contact-number")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Emergency Contact Number</IonLabel>
        <IonInput
          name="emergency-contact-number"
          value={getData("emergency-contact-number")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Blood Donation Count</IonLabel>
        <IonInput
          name="blood-donation-count"
          value={getData("blood-donation-count")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Weight</IonLabel>
        <IonInput
          name="weight"
          value={getData("weight")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Height</IonLabel>
        <IonInput
          name="height"
          value={getData("height")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Occupation</IonLabel>
        <IonInput
          name="occupation"
          value={getData("occupation")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Last Blood Donation Date</IonLabel>
        <IonDatetime
          displayFormat="MMMM DD YYYY"
          name="last-blood-donation-date"
          value={getData("last-blood-donation-date")}
          onIonChange={e => handleChange(e.target as HTMLInputElement)}
        ></IonDatetime>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Member Of Any Organisation</IonLabel>
        <IonTextarea
          auto-grow="true"
          name="member-organisation"
          value={getData("member-organisation")}
          onIonChange={e => handleChange(e.target as HTMLTextAreaElement)}
        ></IonTextarea>
      </IonItem>

      <IonRow>
        <IonCol className="ion-padding-vertical ion-padding-start">
          <IonButton expand="block" size="large" onClick={() => saveForm()}>
            Save Donor
          </IonButton>
        </IonCol>
      </IonRow>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Sucess"}
        message={"Donor data saved successfully"}
        buttons={[
          {
            text: "Okay",
            handler: () => {
              handleSuccessOkay();
            }
          }
        ]}
      />
    </React.Fragment>
  );
};

export default DonorForm;
