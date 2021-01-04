<template>
    <div
        v-if="showing"
        class="fixed z-20 inset-0 w-full h-screen flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 ">
        <div class="bg-white w-4/6 mt-16 overflow-y-scroll">
            <preview-email v-if="loaded" :to="to" :from="from" :subject="subject" :text="text" :html="html" :attachments="attachments" show/>
        </div>

        <spring-spinner
            v-if="!loaded"
            class="self-center w-1/2"
            :animation-duration="3000"
            :size="80"
            color="#ffffff"
        />
        <button class="bg-gray-100 text-primary w-1/6 rounded-md my-5 p-2" @click="$emit('closeModal')">Close</button>
    </div>
</template>

<script>
import axios from "axios";
import PreviewEmail from "@/components/shared/PreviewEmail";
import { SpringSpinner } from 'epic-spinners';


export default {
    name: "ShowModalMail",
    components: {PreviewEmail,SpringSpinner},
    props:{
        showing:Boolean,
        id:Number
    },
    data:function () {
        return {
            loaded:false,
            to:null,
            subject:null,
            html:null,
            text:null,
            attachments:null,
            from:null
        }
    },
    watch:{
        id:function (){
            if (this.id !== null) {
                axios.get('http://127.0.0.1:8000/email/show/' + this.id)
                    .then(response => {
                        this.loaded = true
                        this.to = response.data.to
                        this.from = response.data.from
                        this.subject = response.data.subject
                        this.text = response.data.text
                        this.html = response.data.html
                        this.attachments = response.data.attachments
                    });
            }
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        getData() {
            if (this.id !== null) {
                axios.get('http://127.0.0.1:8000/email/show/' + this.id)
                    .then(response => {
                        this.loaded = true
                        this.to = response.data.to
                        this.from = response.data.from
                        this.subject = response.data.subject
                        this.text = response.data.text
                        this.html = response.data.html
                        this.attachments = response.data.attachments
                    });
            }
        }
    }
}
</script>

<style scoped>

</style>
