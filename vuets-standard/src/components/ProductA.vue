<template>
    <div id="product-list">
        <h1>{{title}}</h1>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(5)">Reduce Price</button>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    @Component({
        components: {},
        computed: {
            products() {
                return this.$store.state.products;
            },
            ...mapGetters([
                'saleProducts',
            ]),
        },
        methods: {
            ...mapActions([
                'reducePrice',
            ]),
        },
        props: {},
        data() {
            return {
                title: 'This is product A',
            };
        },
    })
    export default class ProductA extends Vue {
    }
</script>

<style scoped>
    #product-list {
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
        margin-left: 30px;
        margin-right: 30px;
        padding: 10px 20px;
    }

    #product-list ul {
        padding: 0;
    }

    #product-list ul li {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
    }

    .name {
        margin-right: 5px;
    }

    .price {
        font-weight: bold;
        color: #E8800C;
    }
</style>
