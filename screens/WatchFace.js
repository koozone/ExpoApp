import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, StyleSheet, Button, ImageBackground} from 'react-native';
import tw from 'twrnc';
import {DateTime} from 'luxon';

export const WatchFace = (props) => {
	const {iso = DateTime.now().toISO()} = props;
	const [date, setDate] = useState(DateTime.fromISO(iso));
	const [second, setSecond] = useState(date.diff(DateTime.now()).as('seconds'));

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(DateTime.now().plus({seconds: second}));
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<ImageBackground style={tw`flex-1 justify-center items-center`} source={{uri: `https://placeimg.com/640/480/nature/${date.minute}`}}>
			<Text style={tw`p-3 text-5xl text-black/70 font-bold bg-white/50 rounded-xl`}>{date.toFormat('hh : mm : ss')}</Text>
		</ImageBackground>
	);
};

export default WatchFace;
