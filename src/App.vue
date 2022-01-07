<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/paging">PagingList</router-link> |
			<router-link to="/paging2">PagingList2</router-link>|
			<router-link to="/paging3">PagingList3</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

/* transition style */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
