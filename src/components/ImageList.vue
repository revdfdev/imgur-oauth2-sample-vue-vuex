<template>
    <div v-if="isLoggedin" class="image-container">
        <img v-for="image in allImages" :src="image.link" :key="image.id"  />
    </div>

    <h2 v-else> Please log in to continue </h2>
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
            'allImages',
            'isLoggedin'
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
.image-container {
    column-count: 3;
    column-gap: 0;
}

img {
    max-width: 100%;
    padding: 5px;

}
</style>