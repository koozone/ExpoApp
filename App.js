import {StatusBar} from 'expo-status-bar';
import {useCallback, useEffect, useState} from 'react';
import {Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import TodoItem from './components/TodoItem';
import {DateTime} from 'luxon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';

const getUuid = () => {
	return DateTime.now().toMillis() + Math.round(Math.random() * 9999);
};

const updateStorage = (data) => {
	AsyncStorage.setItem('todo-list', JSON.stringify(data));
};

export default function App() {
	const [todoList, setTodoList] = useState();
	const [inputText, setInputText] = useState('');

	const addItem = useCallback(() => {
		if (!inputText) {
			return Alert.alert('경고', '항목을 입력해 주세요.');
		}
		const newItem = {key: getUuid(), label: inputText, isDone: false};
		const newList = [...todoList, newItem];

		updateStorage(newList);
		setTodoList(newList);
		setInputText('');
	}, [todoList, inputText]);

	const removeItem = useCallback(
		(key) => {
			const newList = todoList.filter((val) => val.key != key);

			updateStorage(newList);
			setTodoList(newList);
		},
		[todoList]
	);

	const updateItem = useCallback(
		(key, isDone) => {
			const newList = produce(todoList, (draft) => {
				const index = draft.findIndex((val) => val.key == key);
				draft[index].isDone = isDone;
			});

			updateStorage(newList);
			setTodoList(newList);
		},
		[todoList]
	);

	useEffect(() => {
		AsyncStorage.getItem('todo-list').then((rowData) => {
			if (rowData) {
				setTodoList(JSON.parse(rowData));
			} else {
				setTodoList([]);
			}
		});
	}, []);

	return (
		<SafeAreaView style={tw`bg-slate-300 flex-1`}>
			<FlatList style={tw`flex-1 p-5`} data={todoList} renderItem={(item) => <TodoItem item={item.item} onUpdate={updateItem} onRemove={removeItem} />} />
			<View style={tw`p-5 flex-row`}>
				<TextInput style={tw`flex-1 border border-black/60 bg-white rounded-lg`} value={inputText} onChangeText={setInputText} />
				<Button title="등록" onPress={() => addItem()} />
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
