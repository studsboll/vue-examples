

<template>
    <span><i>{{message}}</i></span>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from "vue";

    interface ISneakyFox extends Vue {
        message: string;
    }

    export default {
        name: 'sneaky-fox',
        data: function () {
            return {
                message: "Sneaky Fox!"
            }
        }
    } as ComponentOptions<ISneakyFox>;
</script>

<style></style>