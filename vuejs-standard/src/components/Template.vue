<template>
    <div id="app">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Template',
        components: {},
        computed: {},
        methods: {
            greeting: function () {
                return "Greeting!"
            }
        },
        data() {
            return {
                title: 'Welcome'
            }
        }
    }
</script>

<style>

</style>
