module.exports = {
	runtimeCompiler: true,
	publicPath: process.env.NODE_ENV === 'production'
		? ''
		: '/',
	assetsDir: 'assets',
	productionSourceMap: false,
	filenameHashing: true,

	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/sass/_vars.sass"; @import "@/assets/sass/_mixins.sass";`
			}
		}
	}
}