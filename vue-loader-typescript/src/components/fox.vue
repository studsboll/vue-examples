<template>
    <div>
        <h2>I AM THE FOX!</h2>
        <sneaky-fox></sneaky-fox>
        <ul>
            <super-fox v-for="(n, index) in foxesList" :key="index" :fox-number="n"></super-fox>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from "vue";

    import sneakyFox from "./sneaky-fox.vue";
    import superFox from "./super-fox.vue";

    interface IFox extends Vue {
        foxesList: number[];
    }

    export default {
        name: 'fox',
        components: {
            sneakyFox,
            superFox
        },
        props: {
            foxesList: { type: Array }
        }
    } as ComponentOptions<IFox>;

</script>

<style lang="scss">
    ul {
        li {
            display: inline;
        }
    }
    
</style>