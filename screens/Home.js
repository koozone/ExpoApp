import React, {useState, useCallback} from 'react';
import {Button, Text, ScrollView, View, FlatList, Pressable} from 'react-native';
import tw from 'twrnc';

const screenList = [
	{name: '로또 생성기', value: 'LottoGenerator'},
	{name: '자연풍경 시계', value: 'WatchFace'},
	{name: '할일 리스트', value: 'TodoList'},
	{name: '도로명 주소 검색', value: 'JusoFinder'},
];

export const Home = (props) => {
	const {navigation} = props;

	const renderItem = useCallback((props) => {
		const {item} = props;

		return (
			// <Button title={item.name} onPress={() => navigation.navigate(item.name)} />
			<Pressable onPress={() => navigation.navigate(item.value)}>
				<View style={tw`p-3 mt-2 mx-auto w-1/2 bg-red-300 rounded-xl justify-center items-center`}>
					<Text style={tw`text-[1rem]`}>{item.name}</Text>
				</View>
			</Pressable>
		);
	}, []);

	return (
		<>
			<FlatList style={tw`flex-1`} data={screenList.map((item, index) => ({...item, key: index}))} renderItem={renderItem} />
			<View style={tw`flex-1 bg-blue-200`} />
		</>
	);
};

export default Home;
