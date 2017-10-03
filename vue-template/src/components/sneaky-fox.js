import Vue from "vue";

export default Vue.component('fox', {
    template: require('./sneaky-fox.html'),
    data: function () { 
        return {
            message: 'Sneaky Fox',
            styleObject: {
                color: 'red',
                fontSize: '23px'
            }
        }  
    }});