<template>
<div class="flex flex-col justify-center mt-10 mr-8 w-full">
    <div class="flex flex-col border border-gray-500 self-center">
    <div v-if="to !== null" class="flex flex-col justify-end px-4 py-8 my-3">
    <p class="text-black font-bold text-sm">To</p>
    <p class="text-black font-light text-sm">{{to}}</p>
    </div>
    <div v-if="from !== null" class="flex flex-col justify-end px-4 py-8 my-1">
        <p class="text-black font-bold text-sm">From</p>
        <p class="text-black font-light text-sm">{{from}}</p>
    </div>
    <div v-if="subject !== null" class="flex flex-col justify-end px-4 py-8 my-2">
        <p class="text-black font-bold text-sm">Subject</p>
        <p class="text-black font-light text-sm">{{subject}}</p>
    </div>
    <div v-if="text !== null" class="flex flex-col justify-end px-4 py-8 my-2">
        <p class="text-black font-bold text-sm">Text Content</p>
        <p class="text-black font-light text-sm">{{text}}</p>
    </div>
        <div v-if="html !== null" class="flex flex-col justify-end px-4 py-8 my-2 overflow-auto">
            <p class="text-black font-bold text-sm">HTML Content</p>
            <p class="" v-html="html"></p>
        </div>

    </div>

    <div v-if="attachments !== 0" class="flex flex-col justify-end px-4 py-8 my-2">
        <p class="text-black font-bold text-sm">Attachments</p>
        <p v-for="attach in attachments" v-bind:key="attach" class="text-black font-light text-sm">{{attach}}</p>
    </div>

</div>
</template>

<script>
export default {
    name: "PreviewEmail",
    props:['to','from','subject','text','html','attachments']
}
</script>

<style scoped>

</style>
