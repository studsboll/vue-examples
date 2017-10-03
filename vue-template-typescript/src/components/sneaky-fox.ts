import Vue, { ComponentOptions } from "vue";

interface ISneakyFox extends Vue {
    message: string;
}

export default {
    name: 'sneaky-fox',
    template: require('./sneaky-fox.html'),

    data: function() {
        return {
            message: 'Sneaky Fox!'
        }
    }
} as ComponentOptions<ISneakyFox>;