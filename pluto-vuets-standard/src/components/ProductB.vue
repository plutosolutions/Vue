<template>
    <div id="product-list">
        <h1>{{title}}</h1>
        <ul>
            <li v-for="product in products">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
        computed: {
            products() {
                return this.$store.state.products;
            },
        },
        methods: {},
        props: {},
        data() {
            return {
                title: 'This is product B',
            };
        },
    })
    export default class ProductB extends Vue {
    }
</script>

<style scoped>
    #product-list {
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
        margin-left: 30px;
        margin-right: 30px;
        padding: 10px 20px;
    }

    #product-list ul {
        padding: 0;
        list-style-type: none;
    }

    #product-list ul li {
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
        color: #860CE8;
        display: block;
    }
</style>
