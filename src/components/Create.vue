<template>
<div>
    <div class="flex flex-row">
        <div class="w-1/2 flex flex-col justify-start ml-5">
            <form enctype="multipart/form-data" method="post">
                <m-input v-model="to" class=" my-4" name="to" type="email" required :error="toError"/>
                <m-input v-model="from" class=" my-4" name="from" type="email" required :error="fromError"/>
                <m-input v-model="subject" class=" my-4" name="subject" type="email" required :error="subjectError"/>
                <m-textarea v-model="text" class="my-4" name="text" type="text" />
                <m-textarea v-model="html" class=" my-4" name="html" type="text" />
                <input class=" my-4" type="file" placeholder="Choose Attachments" id="attachments" name="attachment[]" @change="onFileChange" multiple max="5">
            </form>
            <div class="self-center flex flex-row justify-center align-middle text-white w-3/6 m-8 py-4 px-5 rounded-md content-center" v-bind:class="loading ? 'bg-red-300' : 'bg-primary'" @click="submitClicked">
                <p v-if="!loading" class="text-center self-center">Search</p>
                <spring-spinner
                    v-if="loading"
                    class="self-center w-1/2"
                    :animation-duration="3000"
                    :size="20"
                    color="#ffffff"
                />
            </div>
        </div>
        <div class="w-1/2">
            <PreviewEmail :to="this.to" :from="from" :subject="subject" :html="html" :text="text" :attachments="attachments" />
        </div>
    </div>
</div>
</template>

<script>
import MInput from "@/components/shared/M-input";
import MTextarea from "@/components/shared/M-textarea";
import PreviewEmail from "@/components/shared/PreviewEmail";
import axios from "axios";
import { SpringSpinner } from 'epic-spinners'


export default {
    name: "Create",
    components: {PreviewEmail, MTextarea, MInput,SpringSpinner},
    data:function (){
        return {
            loading:false,
            to:null,
            from:null,
            subject:null,
            text:null,
            html:null,
            attachments:null,
            attachmentsNumber:0,
            toError:false,
            fromError:false,
            subjectError:false,
        }
    },
    methods:{
        onFileChange(event){
            this.attachments = [];
            this.attachmentsNumber = event.target.files.length;
            const n = event.target.files.length
            for (let i=0;i<n;i++){
                this.attachments.push(event.target.files[i].name)
            }
        },
        ValidateEmail(mail)
        {
            return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);

        },
        submitClicked(){
            this.loading = true;
            console.log(document.getElementById("attachments").files)
            this.toError = false;
            this.fromError = false;
            this.subjectError = false;
            if (this.to === null || this.to.trim() === '' || this.ValidateEmail(this.to)){
                this.toError = true
                this.loading = false;
            }
            if (this.from === null || this.from.trim() === '' || this.ValidateEmail(this.from)){
                this.fromError = true
                this.loading = false;
            }
            if (this.subject === null || this.subject.trim() === ''){
                this.subjectError = true
                this.loading = false;
            }
            if(!this.toError && !this.fromError && !this.subjectError){
                if (this.attachmentsNumber > 3){
                    alert("Maximum of 3 files");
                    this.loading = false;
                }else {
                    let formData = new FormData();
                    formData.append('to',this.to);
                    formData.append('from',this.from)
                    formData.append('subject',this.subject)
                    formData.append( 'text',this.text)
                    formData.append('html',this.html)
                    for(let i=0;i<document.getElementById("attachments").files.length;i++){
                        formData.append('attachments'+'['+i+']',document.getElementById("attachments").files[i])
                    }

                    axios.post('http://127.0.0.1:8000/email/send',formData,{
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(response => {
                        if (response.data.status === 'success'){
                            alert("Email posted successfully");
                        }
                        this.loading = false;
                    })
                }
            }

        }
    }
}
</script>

<style scoped>

</style>
