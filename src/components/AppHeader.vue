<template>
	<div class="ui secondary pointing menu">
		<router-link to="/" class="active item">Image storage</router-link>
		<div class="right menu">
			<div class="horizontal" v-if="isLoggedin">
				<router-link aria-label="Gallery" to="/" class="ui item">Galleries</router-link>
				<router-link aria-label="Upload" to="/uploads" class="ui item">Upload</router-link>
				<a aria-label="Login" href="#" class="ui item" @click="logout">Logout</a>
			</div>
			<div v-else>
				<a aria-label="Login" href="#" class="ui item" @click="login">Login</a>
			</div>
		</div>
	</div>
</template>

<script>
import  { mapActions, mapGetters } from 'vuex';
export default {
	name: 'AppHeader',
	computed: {
		...mapGetters([
			'isLoggedin'
		])
	},
	methods: {
		...mapActions([
			'login',
			'logout'
		]),
	}
}
</script>


<style scoped>
	.horizontal {
		display: flex;
		flex-direction: row;
	};
</style>