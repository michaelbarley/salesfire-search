<template>
    <div class="results">
        <div v-for="product in getProducts" :key="product.id" class="results__card">
            <img :src="product.image_url" :alt="product.title" class="product-image">
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-price">£{{ product.price.min }}</p>
            <a :href="product.link" class="product-link">View</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getProducts']),
    },
};
</script>

<style scoped>
.results {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: start;
    justify-items: center;
}

.results__card {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .25);
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    align-self: stretch;
    max-width: 300px;
}

.product-image {
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 12px;
}

.product-title {
    color: #666;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

.product-price {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

.product-link {
    display: block;
    padding: 12px;
    margin-top: 16px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
}

@media (max-width: 600px) {
    .results {
        grid-template-columns: 1fr;
    }
}
</style>
