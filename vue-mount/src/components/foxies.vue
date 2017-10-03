<docs>
    ## Foxies.Vue
    Foxies are awesome, we celebrate it with this component.
    
    Documentation?
</docs>


<template>
    <div>
        <h1>Running like a fox.</h1>
        <h2>I AM THE FOX!</h2>
        <sneaky-fox></sneaky-fox>
        <ul>
            <super-fox v-for="(fox, index) in foxesList" :key="index" :fox="fox"></super-fox>
        </ul>
        <hr />
        <fox-creator @created="addFox"></fox-creator>
    </div>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from "vue";
    import { IFox } from "./fox.d";
    import sneakyFox from "./sneaky-fox.vue";
    import superFox from "./super-fox.vue";
    import foxCreator from "./fox-creator.vue";

    interface IFoxies extends Vue {
        foxesList: IFox[];
    }

    export default {
        name: 'foxies',
        components: {
            sneakyFox,
            superFox,
            foxCreator
        },
        data: () => ({
            foxesList: <IFox[]> [
                { name: 'Gregor', age: 1 },
                { name: 'Cat', age: 2 },
                { name: 'Old grumpy', age: 4 },
                { name: 'McFluffy', age: 5 },
                { name: 'Johnny', age: 7 }
                ]
        }),
        methods: {
            addFox: function(fox: IFox) {
                console.log("Add this foxie", fox);
                this.foxesList.push(fox);
            }
        }
    } as ComponentOptions<IFoxies>;
</script>

<style lang="scss">
    ul {
        li {
            display: inline;
        }
    }
</style>