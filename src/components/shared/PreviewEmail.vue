<template>
<div class="flex flex-col justify-center mt-10 mr-8 w-full">
    <div class="flex flex-col border  border-dashed border-gray-500 self-center w-5/6">
    <div v-if="to !== null" class="flex flex-col justify-end border-b px-4 py-8 my-3">
    <p class="text-black font-bold text-md">To</p>
    <p class="text-black font-light text-md">{{to}}</p>
    </div>
    <div v-if="from !== null" class="flex flex-col justify-end border-b px-4 py-8 my-1">
        <p class="text-black font-bold text-md">From</p>
        <p class="text-black font-light text-md">{{from}}</p>
    </div>
    <div v-if="subject !== null" class="flex flex-col justify-end border-b px-4 py-8 my-2">
        <p class="text-black font-bold text-md">Subject</p>
        <p class="text-black font-light text-md">{{subject}}</p>
    </div>
    <div v-if="text !== null" class="flex flex-col justify-end px-4 border-b py-8 my-2">
        <p class="text-black font-bold text-md">Text Content</p>
        <p class="text-black font-light text-md">{{text}}</p>
    </div>
        <div v-if="html !== null" class="flex flex-col justify-end border-b px-4 py-8 my-2 overflow-auto">
            <p class="text-black font-bold text-md">HTML Content</p>
            <p class="" v-html="html"></p>
        </div>
    </div>

    <div v-if="attachments !== null" class="flex flex-col justify-start self-center px-4 w-5/6 py-8 my-2">
        <p class="text-black font-bold text-md">Attachments</p>
        <div v-if="!show" >
        <p  v-for="attach in attachments" v-bind:key="attach" class="text-black font-light text-md">{{attach}}</p>
        </div>
        <div v-if="show" class="flex flex-col">
            <a class="underline" v-for="attachment in attachments" v-bind:key="attachment.name" :href="attachment.url" target="_blank">{{attachment.name}}</a>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "PreviewEmail",
    props:{to:String,from:String,subject:String,text:String,html:String,attachments:Object,show:Boolean}
}
</script>

<style scoped>

</style>
