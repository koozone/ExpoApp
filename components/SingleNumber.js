import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

export const SingleNumber = (props) => {
	const {number} = props;

	return (
		<View
			style={tw.style('p-2 w-12 h-12 rounded-full justify-center items-center', {
				'bg-yellow-300': number > 0 && number <= 10,
				'bg-blue-300': number > 10 && number <= 20,
				'bg-red-300': number > 20 && number <= 30,
				'bg-slate-300': number > 30 && number <= 40,
				'bg-green-300': number > 40 && number <= 45,
			})}
		>
			<Text style={tw`text-red-500 text-xl font-bold`}>{`${number}`}</Text>
		</View>
	);
};

export default SingleNumber;
