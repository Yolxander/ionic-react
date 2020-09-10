import React from 'react';
import {
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonCard,
} from '@ionic/react';

const BiorhythmCard = (props) => {
	return (
		<IonCard className="ion-text-center">
			<IonCardHeader>
				<IonCardTitle>{props.targetDate}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<p>Physical: 83%</p>
				<p>Emotional:83%</p>
				<p>Intellectual:52%</p>
			</IonCardContent>
		</IonCard>
	);
};

export default BiorhythmCard;
