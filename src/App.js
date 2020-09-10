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


function App() {
  const [birthDate, setBirthDate] = useState('');
  const targetDate = new Date().toISOString();

	return (
		<IonApp>
			<IonHeader>
				<IonToolbar>
					<IonTitle>My App</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonItem>
					<IonLabel position="stacked">Date of Birth:</IonLabel>
					{/* formating date appereance */}
					<IonDatetime
						displayFormat="D MMM YYYY"
						value={birthDate}
						onIonChange={(e) => setBirthDate(e.target.value)}
					/>
				</IonItem>
        <BiorhythmCard targetDate={targetDate}/>
			</IonContent>
		</IonApp>
	);
}

export default App;
