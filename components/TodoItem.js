import {useState} from 'react';
import {Text, Switch, View, Button} from 'react-native';
import tw from 'twrnc';

export const TodoItem = (props) => {
	const {item, onUpdate, onRemove} = props;
	const {key, label = '(내용 없음)', isDone} = item;

	return (
		<View style={tw`flex-row items-center pt-2 pb-2 border-b border-slate-200`}>
			<Switch value={isDone} style={tw`mr-2`} onValueChange={(val) => onUpdate(key, val)} />
			<Text
				style={tw.style(`text-lg flex-1`, {
					'text-red-500': isDone,
					'text-slate-500': !isDone,
				})}
			>
				{label}
			</Text>
			<Button title="삭제" onPress={() => onRemove(key)} />
		</View>
	);
};

export default TodoItem;
