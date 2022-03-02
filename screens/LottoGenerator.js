import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import tw from 'twrnc';
import SingleNumber from '../components/SingleNumber';

const getBall = (length = 1) => {
	let balls = [...Array(45)].map((val, index) => index + 1);
	balls = balls.sort(() => Math.random() - 0.5);
	balls = balls.slice(0, length);
	balls = balls.sort((a, b) => a - b);

	return balls;
};

export const LottoGenerator = () => {
	const [lotto, setLotto] = useState(getBall(6));

	return (
		<View style={tw`p-2 flex-1 justify-center`}>
			<View style={tw`p-10 bg-blue-100 flex-row justify-center items-center`}>
				{lotto.map((val) => (
					<SingleNumber number={val} />
				))}
			</View>
			<Button
				title="shuffle"
				onPress={() => {
					setLotto(getBall(6));
				}}
			/>
		</View>
	);
};

export default LottoGenerator;
