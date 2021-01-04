<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-center">
            <input v-model="searchInput" :placeholder="'Search'" class="w-1/3 rounded-md bg-txt-secondary text-txt-primary placeholder-gray-500  px-4 py-2 focus:border-white mx-6 "/>
            <select class="w-1/5 mx-6 px-4 rounded-md" v-model="selected">
                <option value=null selected disabled>Select option</option>
                <option value="to">Sender</option>
                <option value="from">Recipient</option>
                <option value="subject">Subject</option>
            </select>
            <button class="bg-primary text-white w-1/6 mx-4 rounded-md" @click="clickSearch">Search</button>
        </div>
        <div class="flex flex-col justify-center mt-5">
            <ul>
                <div class="flex flex-row mx-4 p-5">
                    <p class="w-1/5 text-center text-md font-bold">Status</p>
                    <p class="w-1/5 text-center text-md font-bold">To</p>
                    <p class="w-1/5 text-center text-md font-bold">From</p>
                    <p class="w-1/5 text-center text-md font-bold">Subject</p>
                    <p class="w-1/5 text-center text-md font-bold">Show</p>
                </div>
                <div class="border p-2 mx-4 border-red-100 flex flex-row " v-for="post in laravelData.data" :key="post.id">

                    <div v-if="post.status === 0" class="self-center flex flex-col justify-center w-1/5">
                    <div class="self-center w-1/3">
                        <p class="bg-gray-100 rounded-full text-center p-2 text-green-500 text-md font-medium">Success</p>
                    </div>
                    </div>
                    <div v-if="post.status === 1" class="self-center flex flex-col justify-center w-1/5">
                        <div class="self-center w-1/3">
                            <p class="bg-gray-100 rounded-full text-center p-2 text-red-600 text-md font-medium">Failed</p>
                        </div>
                    </div>
                    <div v-if="post.status === 2" class="self-center flex flex-col justify-center w-1/5">
                        <div class="self-center w-1/3">
                            <p class="bg-gray-100 rounded-full text-center p-2 text-yellow-400 text-md font-medium">Posted</p>
                        </div>
                    </div>
                    <p class=" w-1/5 text-center text-md font-light">{{post.to}}</p>
                    <p class="w-1/5 text-center text-md font-medium">{{post.from}}</p>
                    <p class="w-1/5 text-center text-md font-medium truncate">{{post.subject}}</p>
                    <button class="w-1/5 bg-red-400 text-white self-center mx-5" @click="showEmail(post.id)">Show</button>
                </div>
            </ul>

            <tailable-pagination
                :data="laravelData"
                :showNumbers="true"
                @page-changed="getResults">
            </tailable-pagination>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "Searchbar",
    data: function (){
        return{
            selected:null,
            laravelData: {},
            searchInput:null
        }
    },
    mounted() {
        this.getResults();
    },
    methods:{
        clickSearch : function () {
            axios.get(' http://127.0.0.1:8000/email/search?param=' + this.selected + '&search=' + this.searchInput )
                .then(response => {
                    this.laravelData = response.data;
                });
        },
        getResults(page = 1) {
            axios.get(' http://127.0.0.1:8000/email/search?param=' + this.selected + '&search=' + this.searchInput + '&page=' + page )
                .then(response => {
                    this.laravelData = response.data;
                });
        },
        showEmail(id){
            console.log(id)
        }
    }
}
</script>

<style scoped>

</style>
