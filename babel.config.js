module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					'@assets': './src/assets',
					'@pages': './src/pages',
					'@services': './src/shared/services',
					'@components': './src/shared/components',
				},
			},
		],
	],
};
