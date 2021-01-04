<template>
    <div class="h-screen relative w-full">
        <div class="bg-primary z-10 w-full py-4 px-16 flex flex-row justify-end items-center">
            <p class="font-body text-white text-lg z-10 self-end font-bold text-right">MiniSend</p>
        </div>
        <div class="flex-row flex z-0 h-full w-full absolute top-0 left-0">
            <div class="self-start w-1/4 flex flex-col bg-primary h-full">
                <p class="font-body font-medium text-lg text-white self-center">John Doe</p>
                <p class="font-body font-light text-lg text-white self-center">Head Office</p>
                <div class="flex-col flex mt-12">
                    <router-link to="/home" v-bind:class="isUrl('/home') ? 'bg-white text-primary font-bold':''" method="get" class="w-full text-center font-body py-2 font-thin text-lg text-white self-center mt-4 mx-5">HOME</router-link>
                    <router-link to="/create" v-bind:class="isUrl('create') ? 'bg-white text-primary font-bold':''" method="get" class="w-full text-center font-body py-2 font-thin text-lg text-white self-center mt-4">CREATE</router-link>
                </div>
            </div>
            <div class="z-10 mt-16 w-3/4 overflow-y-auto">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Layout",
    methods:{
        isUrl : function (string) {
            return !!window.location.href.toString().includes(string);
        }
    }
}
</script>

<style scoped>

</style>
