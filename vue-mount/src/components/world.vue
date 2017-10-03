<template><h1>Hello World</h1></template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

interface IWorld extends Vue {

}

export default {
    name: 'world'
} as ComponentOptions<IWorld>;

</script>