<template>
    <div>
        <img v-for="image in allImages" :src="image.link" :key="image.id"  />
    </div>
</template>

<script>
import  { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    created() {
        this.fetchImages();
    },
    computed: {
        ...mapGetters([
            'allImages'
        ])
    },
    methods: {
        ...mapActions([
            'fetchImages'
        ])
    }
}
</script>

<style scoped>

</style>