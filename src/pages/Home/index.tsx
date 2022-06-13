import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Pressable, Text } from 'react-native';

//Third Party
import { showMessage } from 'react-native-flash-message';
import moment from 'moment';

//Components

//Configs
import services from '@services/services';

//Styles
import styles from './style';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [info, setInfo] = useState({
		count: 0,
		pages: 0,
		next: null,
		prev: null,
	});

	useEffect(() => {
		getInit();
		setPage(1);
	}, []);

	const getInit = async (url: string = '/episode') => {
		setLoading(true);
		services
			.getEpisodes(url)
			.then(res => {
				setInfo(res?.data?.info);
				setData(res?.data?.results);
				console.log();
			})
			.catch(() => {
				showMessage({
					message: 'We encountered an unknown error while fetching partitions.',
					duration: 2000,
				});
			})
			.finally(() => setLoading(false));
	};

	const next = () => {
		if (info?.next && !loading) {
			setPage(x => x + 1);
			getInit(info?.next);
		}
	};

	const prev = () => {
		if (info?.prev && !loading) {
			setPage(x => x - 1);
			getInit(info?.prev);
		}
	};

	const pressItem = (item: any) => {
		navigation.navigate('Episodes', { item });
	};

	const _renderItem = ({ item, index }: { item: any; index: number }) => {
		return (
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
						<View style={styles.itemContentFooter}>
							<Pressable style={styles.pressable} onPress={() => pressItem(item)} hitSlop={7}>
								<Text style={styles.buttonText}>VIEW</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		);
	};

	const _keyExtractor = (item: any, index: number) => (item?.id ?? index) + 'Episode';

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Episodes</Text>
				</View>
				<FlatList data={data} renderItem={_renderItem} keyExtractor={_keyExtractor} />
				<View style={styles.pagination}>
					<Pressable style={styles.paginationPress} onPress={prev} hitSlop={7}>
						<Text style={[styles.paginationPressText, !info?.prev && { color: '#777' }]}>Prev</Text>
					</Pressable>
					<Text style={styles.paginationPageText}>{`${page} / ${Math.ceil(info?.count / 20)}`}</Text>
					<Pressable style={styles.paginationPress} onPress={next} hitSlop={7}>
						<Text style={[styles.paginationPressText, !info?.next && { color: '#777' }]}>Next</Text>
					</Pressable>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Home;
