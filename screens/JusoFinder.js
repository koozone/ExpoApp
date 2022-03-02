import React, {useCallback, useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import {JusoItem} from './../components/JusoItem';

export const JusoFinder = () => {
	const [jusoList, setJusoList] = useState();
	const [inputText, setInputText] = useState('');

	const searchJuso = useCallback(async () => {
		const apiKey = 'devU01TX0FVVEgyMDIyMDMwMjIyNTM1ODExMjMwMTg=';

		try {
			const response = await axios.get('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
				params: {
					confmKey: apiKey,
					currentPage: 1,
					countPerPage: 100,
					keyword: inputText,
					resultType: 'json',
				},
			});
			setJusoList(response.data.results.juso);
		} catch (error) {
			console.warn(error);
		}
	}, [inputText]);

	return (
		<SafeAreaView style={tw`bg-slate-300 flex-1`}>
			<View style={tw`p-5 flex-row`}>
				<TextInput style={tw`flex-1 border border-black/60 bg-white rounded-lg mr-2`} value={inputText} onChangeText={setInputText} />
				<Button
					title="검색"
					onPress={() => {
						searchJuso();
					}}
				/>
			</View>
			<FlatList style={tw`flex-1 p-5`} data={jusoList} renderItem={(item) => <JusoItem item={item.item} />} keyExtractor={(item) => item.zipNo + item.roadAddr} />
		</SafeAreaView>
	);
};

export default JusoFinder;
