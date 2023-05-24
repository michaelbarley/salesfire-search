<template>
    <div class="search">
        <input type="text" :value="value" @input="emitValue" placeholder="Search here..." class="search__input" />
    </div>
</template>
  
<script>
import { debounce } from "lodash";

export default {
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    methods: {
        emitValue: debounce(function (e) {
            this.$emit("update:value", e.target.value);
        }, 300),
    },
};
</script>
  
<style scoped>
.search {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 16px;
}

.search__input {
    width: 100%;
    padding: 20px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
}
</style>

  