<template>
	<div class="home">
		<button @click="openAlert">Alert</button>
		<transition name="fade">
			<Alert v-if="$store.state.alertData.isAlert" />
		</transition>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	methods: {
		openAlert() {
			this.$store.commit('alertToggle', {
				isAlert: true,
				text: 'Hello world',
			});
		},
	},
};
</script>
