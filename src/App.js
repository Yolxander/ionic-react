import {
	IonApp,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonItem,
	IonLabel,
	IonInput,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('');

	return (
		<IonApp>
			<IonHeader>
				<IonToolbar>
					<IonTitle>My App</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonItem>
					<IonLabel position="stacked">Name:</IonLabel>
					<IonInput
						onIonChange={(e) => setName(e.target.value)}
						type="text"
						value={name}
					/>
				</IonItem>
        <IonItem>
					<IonLabel position="stacked">Date of Birth:</IonLabel>
					<IonDatetime
					/>
				</IonItem>
				<p>Name: {name}</p>
			</IonContent>
		</IonApp>
	);
}

export default App;
