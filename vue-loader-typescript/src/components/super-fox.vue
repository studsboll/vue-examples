<template>
    <li>
        <div>
            <h2 v-if="foxNumber == 4">Mega FoX! {{foxNumber}}</h2>
            <h3 v-else>Super FoX! {{foxNumber}}</h3>
        </div>
    </li>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from "vue";

    interface ISuperFox extends Vue {
        foxNumber: number;
    }

    export default {
        name: 'super-fox',
        props: {
            foxNumber: { type: Number, default: 0 }
        }
    } as ComponentOptions<ISuperFox>;
</script>

<style scoped>
    h2 {
        background: maroon;
    }
</style>