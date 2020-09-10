import {
	IonApp,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonItem,
	IonLabel,
	IonDatetime,
	
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage }from './hooks'



function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const[targetDate,setTargetDate] = useState(new Date().toISOString());


	return (
		<IonApp>
			<IonHeader>
				<IonToolbar color="warning">
					<IonTitle className="ion-text-center" >Biorhythm Calculator</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
      {birthDate && targetDate &&
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />}
				<IonItem>
					<IonLabel position="fixed">Date of Birth:</IonLabel>
					{/* formating date appereance */}
					<IonDatetime
						displayFormat="D MMM YYYY"
						value={birthDate}
						onIonChange={(e) => setBirthDate(e.detail.value)}
					/>
				</IonItem>
        <IonItem>
					<IonLabel position="fixed">Taget Date:</IonLabel>
					{/* formating date appereance */}
					<IonDatetime
						displayFormat="D MMM YYYY"
						value={targetDate}
						onIonChange={(e) => setTargetDate(e.detail.value)}
					/>
				</IonItem>
			</IonContent>
		</IonApp>
	);
}

export default App;
