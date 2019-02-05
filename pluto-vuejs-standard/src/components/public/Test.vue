<template>
    <div id="app">
        <h1>{{title}}</h1>
        <ul>
            <li v-for="record in records">{{record}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Test',
        components: {},
        computed: {},
        methods: {
            greeting: function () {
                return "Greeting!"
            }
        },
        data() {
            return {
                title: 'Test Components',
                records : [
                    "Alfreds Futterkiste",
                    "Berglunds snabbköp",
                    "Centro comercial Moctezuma",
                    "Ernst Handel",
                ]
            }
        }
    }
</script>

<style>

</style>
