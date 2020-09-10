import React from 'react';
import dayjs from 'dayjs'
import {
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonCard,
} from '@ionic/react';

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY')
}

const BiorhythmCard = (props) => {
	return (
		<IonCard className="ion-text-center">
			<IonCardHeader>
				<IonCardTitle>{formatDate(props.targetDate)}</IonCardTitle>
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
