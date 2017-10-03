

<template>
    <span><i>{{message}}</i></span>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from 'vue-class-component';

    @Component({
        name: 'sneaky-fox'
    })
    export default class SneakyFox extends Vue {
        message: string = "Sneaky Fox!";
    }
</script>

<style></style>