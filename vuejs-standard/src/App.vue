<template>
    <div id="app">
        <h1>{{title}}</h1>
        <test></test>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Test from './components/public/Test'

    export default {
        name: 'app',
        components: {
            'test': Test
        },
        computed: {},
        methods: {
            greeting: function () {
                return "Greeting from Vuejs Project"
            }
        },
        data() {
            return {
                title: 'Pluto Vuejs Standard'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
