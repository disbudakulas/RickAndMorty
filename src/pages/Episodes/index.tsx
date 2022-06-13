import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

//Third Party
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';

//Components
import { Icon } from '@components/index';

//Styles
import styles from './style';
import services from '@services/services';

const Episodes = (props: any) => {
	const navigation = useNavigation();
	const [item, setItem] = useState(null);
	useEffect(() => {
		getInit();
	}, []);

	const getInit = () => {
		services
			.getEpisode(props?.route?.params?.item?.id)
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

	const pressItem = (item: any) => {
		navigation.navigate('Character', { item });
	};

	const _renderItem = ({ item, index }: { item: any; index: number }) => {
		return (
			<Pressable style={styles.characterContainer} onPress={() => pressItem(item)}>
				<FastImage source={require('@assets/images/character.png')} style={styles.characterImage} />
				<Text style={styles.characterText}>Performer - {index + 1}</Text>
			</Pressable>
		);
	};

	const _keyExtractor = (item: any, index: number) => (item?.id ?? index) + 'Character';

	const back = () => {
		navigation.goBack();
	};

	return (
		<FastImage source={require('@assets/images/cover.jpeg')} style={styles.container}>
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
				<View style={styles.contentContainer}>
					<View style={styles.contentContainer2}>
						<View style={styles.itemContainer}>
							<View style={styles.itemUseContainer}>
								<View style={styles.imageContainer}>
									<FastImage source={require('@assets/images/cover.jpeg')} style={styles.image} resizeMode="cover" />
								</View>
								<View style={styles.itemContent}>
									<View>
										<Text style={styles.itemName}>{item?.name}</Text>
										<Text style={styles.itemEpisode}>{item?.episode}</Text>
										<Text style={styles.itemEpisode}>{moment(item?.air_date).format('DD MMMM YYYY')}</Text>
									</View>
								</View>
							</View>
						</View>
						<SafeAreaView style={styles.safeArea}>
							<ScrollView>
								<Text style={styles.labelText}>Introduce</Text>
								<Text style={styles.introContentText}>
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
									here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
									Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
								</Text>
								<Text style={styles.labelText}>Performers</Text>
								<FlatList
									data={item?.characters}
									renderItem={_renderItem}
									keyExtractor={_keyExtractor}
									horizontal
									showsHorizontalScrollIndicator={false}
								/>
							</ScrollView>
						</SafeAreaView>
					</View>
				</View>
			</View>
		</FastImage>
	);
};

export default Episodes;
