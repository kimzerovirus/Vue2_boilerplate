<template>
	<div class="alert-wrapper">
		<div class="alert-wrap">
			<h3 class="alert-txt" v-html="txt"></h3>
			<div class="btn_center">
				<button type="button" class="btn" @click.prevent="onCloseModal">
					확인
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		onCloseModal() {
			this.$store.commit('alertToggle', { isAlert: false });
		},
	},
	computed: {
		txt() {
			return this.$store.state.alertData.text;
		},
	},
};
</script>

<style scoped>
.alert-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
}

.alert-wrap {
	position: relative;
	width: 500px;
	padding: 20px 30px 30px 30px;
	line-height: 24px;
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
}

.alert-txt {
	text-align: center;
	font-size: 1.4em;
	margin: 20px 20px 30px;
}

.btn {
	background: #008cba;
	border-radius: 8px;
	border: none;
	font-size: 1em;
	color: #fff;
	padding: 8px 20px;
}

@media only all and (max-width: 767px) {
	.alert-wrap {
		position: relative;
		width: 70% !important;
		margin: 0;
		padding: 20px 30px 30px 30px;
		line-height: 24px;
		background: #fff;
		border-radius: 5px;
		overflow: hidden;
	}
}
</style>
