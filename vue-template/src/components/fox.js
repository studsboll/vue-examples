import Vue from "vue";
import sneakyFox from "./sneaky-fox";

export default Vue.component('fox', {
    template: '<div>I AM THE FOX!<br/><sneaky-fox></sneaky-fox></div>',
    components: {
        'sneaky-fox': sneakyFox
    }
  });

