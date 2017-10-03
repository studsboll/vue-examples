<template>
    <li>
        <div>
            <h2 v-if="foxNumber == 4">Mega FoX! {{foxNumber}}</h2>
            <h3 v-else>Super FoX! {{foxNumber}}</h3>
        </div>
    </li>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from 'vue-class-component';
    import { Prop } from "vue-property-decorator";

    @Component({
        name: 'super-fox'
    })
    export default class SuperFox extends Vue {
        @Prop({ default: 0 })
        foxNumber: number;
    }
</script>

<style scoped>
    h2 {
        background: maroon;
    }
</style>