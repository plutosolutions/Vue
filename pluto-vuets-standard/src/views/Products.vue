<template>
    <div id="products">
        <ProductA></ProductA>
        <ProductB></ProductB>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import ProductA from '@/components/ProductA.vue';
    import ProductB from '../components/ProductB.vue';

    @Component({
        components: {
            ProductA,
            ProductB,
        },
        computed : {},
        methods: {},
        props : {},
        data() {
            return {
                title: 'These are products list',
            };
        },
    })
    export default class Products extends Vue {
    }
</script>

<style scoped>
</style>
