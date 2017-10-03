<docs>
    ## Fox-Creator.vue
    We can make new fluffy foxies now.
</docs>

<template>
    <div>
        <input type="text" v-model.trim="newFox.name" />
        <input type="number" v-model.number="newFox.age" />
        <button @click="theCreator" type="button">Come to Life!</button>
    </div>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from "vue";
    import { IFox } from "./fox.d";

    interface IFoxCreator extends Vue {
        newFox: IFox;
    }

    export default {
        name: 'fox-creator',
        data: () => ({
            newFox: <IFox>{}
        }),
        methods: {
            theCreator: function () {
                this.$emit('created', this.newFox);
            }
        }
        
    } as ComponentOptions<IFoxCreator>;

</script>