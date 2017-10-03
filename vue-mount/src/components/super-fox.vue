<docs>
    ## Foxies.Vue
    Foxies are awesome, we celebrate it with this component.
</docs>

<template>
    <li>
        <div>
            <h2 v-if="fox.age == 4">Mega FoX! {{fox.name}}</h2>
            <h3 v-else>Super FoX! {{fox.name}}</h3>
        </div>
    </li>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from "vue";
    import { IFox } from "./fox.d";

    interface ISuperFox extends Vue {
        fox: IFox;
    }

    export default {
        name: 'super-fox',
        props: {
            fox: { type: Object, default: null }
        }
    } as ComponentOptions<ISuperFox>;
</script>

<style scoped>
    h2 {
        background: maroon;
    }
</style>