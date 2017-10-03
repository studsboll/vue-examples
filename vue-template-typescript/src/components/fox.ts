import Vue, { ComponentOptions } from "vue";
import sneakyFox from "./sneaky-fox";

interface IFox extends Vue {
}

export default {
    name: 'fox',
    template: '<div>I AM THE FOX!<br/><sneaky-fox></sneaky-fox></div>',
    components: {
        sneakyFox
    }
} as ComponentOptions<IFox>;