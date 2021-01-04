<template>
    <div class="bg-primary w-56 mx-4 mt-8 py-5 rounded" id="card2">
        <div class="flex flex-col ">
            <p class="text-white text-xl mx-4 my-2 font-body">{{name}}</p>
            <p class="text-white text-5xl mx-4 font-bold">{{data}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props:['data','name']
}
</script>

<style scoped>

</style>
