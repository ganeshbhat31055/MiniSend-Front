<template>
    <div>
        <p class="text-primary font-bold my-2 px-4">{{nameCaps}}</p>
        <input  :type="type" :required="required" @input="$emit('input',$event.target.value)" :name="name" v-bind:class="error ? 'border-red-300 border-2':''" class="w-5/6 mx-4 rounded-md bg-txt-secondary text-txt-primary placeholder-gray-500  px-4 py-2 focus:border-white "/>
    </div>
</template>

<script>
export default {
    name: "M-input",
    props:{
        type:String,
        required:Boolean,
        name:String,
        error:Boolean
    },
    data:function (){
      return {
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
