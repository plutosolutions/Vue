<template>
    <h1>{{title}}</h1>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
        computed : {},
        methods: {},
        props : {},
        data() {
            return {
                title: 'This is a vue template',
            };
        },
    })
    export default class Template extends Vue {
    }
</script>

<style scoped>

</style>
