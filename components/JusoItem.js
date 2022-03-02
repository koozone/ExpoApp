import {useState} from 'react';
import {Text, Switch, View, Button} from 'react-native';
import tw from 'twrnc';

export const JusoItem = (props) => {
	const {item} = props;
	const {zipNo, roadAddr} = item;

	return (
		<View style={tw`flex-row items-center pt-2 pb-2 border-b border-slate-200`}>
			<Text style={tw.style('text-lg flex-1 text-slate-500')}>{`[${zipNo}] ${roadAddr}`}</Text>
			<Button title="선택" onPress={() => {}} />
		</View>
	);
};

export default JusoItem;
