import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

//Third Party
import FastImage from 'react-native-fast-image';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';

//Components
import { Icon } from '@components/index';

//Styles
import styles from './style';
import services from '@services/services';

const Character = (props: any) => {
	const navigation = useNavigation();
	const [item, setItem] = useState(null);
	useEffect(() => {
		getInit();
	}, []);

	const getInit = () => {
		services
			.getCharacter(props?.route?.params?.item)
			.then(res => {
				setItem(res?.data);
			})
			.catch(() => {
				showMessage({
					message: 'We encountered an unknown error while fetching partition.',
					duration: 2000,
				});
			});
	};

	const _renderItem = ({ item, index }: { item: any; index: number }) => {
		return (
			<View style={styles.repertuarItemContainer}>
				<FastImage source={require('@assets/images/character.png')} style={styles.repertuarItemImage} />
				<Text style={styles.repertuarItemText}>Episode - {index + 1}</Text>
			</View>
		);
	};

	const _keyExtractor = (item: any, index: number) => (item?.id ?? index) + 'Episodes';

	const back = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<FastImage source={{ uri: item?.image }} style={styles.image}>
				<View style={styles.maskedContainer}>
					<SafeAreaView>
						<View style={styles.headerContainer}>
							<Pressable onPress={back} hitSlop={7}>
								<Icon name="arrow-back-ios : material" size={25} color="#fff" />
							</Pressable>
						</View>
					</SafeAreaView>
					<View style={styles.playerContainer}>
						<Icon name="play-circle : feather" size={45} color="#fff" />
					</View>
					<View style={styles.playerContentContainer}>
						<Text style={styles.playerName}>{item?.name}</Text>
						<Text style={styles.playerInfo}>
							{item?.status}, {item?.gender}, {item?.species}
						</Text>
						<Text style={styles.location}>{item?.location?.name}</Text>
					</View>
				</View>
			</FastImage>
			<View style={styles.repertuarContainer}>
				<SafeAreaView>
					<ScrollView>
						<Text style={styles.repertuarLabel}>Repertuar</Text>
						<FlatList
							data={item?.episode}
							renderItem={_renderItem}
							keyExtractor={_keyExtractor}
							horizontal
							showsHorizontalScrollIndicator={false}
						/>
					</ScrollView>
				</SafeAreaView>
			</View>
		</View>
	);
};

export default Character;
