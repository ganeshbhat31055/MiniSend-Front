<template>
    <div>
        <p class="text-primary font-bold my-2 px-4">{{nameCaps}}</p>
        <textarea v-model="onInput" @input="$emit('input',$event.target.value)" rows="8" :type="type" :required="required" :name="name" class="w-5/6 mx-4 rounded-md bg-txt-secondary text-txt-primary placeholder-gray-500  px-4 py-2 focus:border-white "/>
    </div>
</template>

<script>
export default {
    name: "M-textarea",
    props:{
        type:String,
        required:Boolean,
        name:String,
        error:Boolean
    },
    data:function (){
        return {
            'onInput':null,
            'nameCaps':null
        }
    },
    mounted() {
        this.nameCaps = this.name.toUpperCase();
    },
    methods:{

    }
}
</script>

<style scoped>

</style>
