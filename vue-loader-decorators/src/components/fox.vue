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
    import Vue from "vue";
    import Component from "vue-class-component";

    import { Prop } from "vue-property-decorator";

    import sneakyFox from "./sneaky-fox.vue";
    import superFox from "./super-fox.vue";

    @Component({
        name: 'fox',
        components: {
            sneakyFox,
            superFox
        }
    })
    export default class Fox extends Vue {
        foxesList : number[] = [1, 4, 5, 6];
    }
</script>

<style lang="scss">
    ul {
        li {
            display: inline;
        }
    }
    
</style>