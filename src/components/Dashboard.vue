<template>
    <div class="flex flex-col justify-center">
        <div class="flex flex-row flex-wrap justify-around">
            <card :data="total" name="Total"/>
            <card :data="sent" name="Sent"/>
            <card :data="posted" name="Posted"/>
            <card :data="failed" name="Failed"/>
        </div>
        <p class="self-center my-8 text-xl">Search for your Email Here !</p>
        <searchbar />
    </div>
</template>

<script>

import Card from "@/components/shared/Card";
import Searchbar from "@/components/shared/Searchbar";
import axios from 'axios'

export default {
    name: "Dashboard",
    components: {Searchbar, Card},
    data:function (){
        return {
            sent:0,
            failed:0,
            posted:0,
            total:0
        }
    },
    mounted(){
        axios.get('http://127.0.0.1:8000/email/dashboard')
        .then(response =>{
            this.total = response.data.total;
           this.sent = response.data.success;
           this.failed = response.data.failed;
           this.posted = response.data.posted;
        });
    }
}
</script>

<style scoped>

</style>
