<docs>
    ## Sneaky-Fox.Vue
    Sometimes foxies are sneaky.
</docs>

<template>
    <span>Sneaky fox! <i>{{fox.name}}</i></span>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from "vue";
    import { IFox } from "./fox.d";

    interface ISneakyFox extends Vue {

    }

    export default {
        name: 'sneaky-fox',
        data: function () {
            return {
                fox: <IFox> { name: 'Napoleon', age: 10 }
            }
        }
    } as ComponentOptions<ISneakyFox>;
</script>

<style scoped>
    i {
        font-weight: bold;
    }
</style>