import Vue from "vue";
import Component from "vue-class-component";

import { Prop } from "vue-property-decorator";

import sneakyFox from "./sneaky-fox";

@Component({
    template: '<div>I AM THE FOX!<br/><sneaky-fox></sneaky-fox></div>',
    name: 'fox',
    components: {
        sneakyFox
    }
})
export default class Fox extends Vue {
}