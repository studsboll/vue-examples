<template>
    <li>
        <div>
            <h2 v-if="foxNumber == 4">Mega FoX! {{foxNumber}}</h2>
            <h3 v-else>Super FoX! {{foxNumber}}</h3>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'super-fox',
        props: {
            foxNumber: { type: Number, required: true }
        }
    }
</script>

<style scoped>
    h2 {
        background: maroon;
    }
</style>