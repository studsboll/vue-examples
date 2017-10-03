<template>
    <div>
        <h2>I AM THE FOX!</h2>
        <sneaky-fox></sneaky-fox>
        <ul>
            <super-fox v-for="(n, index) in foxesList" :key="index" :fox-number="n"></super-fox>
        </ul>
    </div>
</template>

<script>
    import sneakyFox from "./sneaky-fox.vue";
    import superFox from "./super-fox.vue";

    export default {
        name: 'fox',
        data: () => ({}),
        props: {
            foxesList: { type: Array, required: true }
        },
        computed: {},
        components: {
            sneakyFox,
            superFox
        }
    }
</script>

<style lang="scss">
    ul {
        li {
            display: inline;
        }
    }
</style>