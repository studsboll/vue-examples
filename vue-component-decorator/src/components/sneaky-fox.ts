import Vue from "vue";
import Component from 'vue-class-component';

@Component({
    template: require('./sneaky-fox.html'),
    name: 'sneaky-fox'
})
export default class SneakyFox extends Vue {
    message: string = "Sneaky Fox!";
}