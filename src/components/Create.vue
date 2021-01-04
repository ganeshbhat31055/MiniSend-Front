<template>
<div>
    <div class="flex flex-row">
        <div class="w-1/2 flex flex-col justify-start ml-5">
            <form enctype="multipart/form-data" method="post" >
                <m-input v-model="to" class=" my-4" name="to" type="email" required :error="toError"/>
                <m-input v-model="from" class=" my-4" name="from" type="email" required :error="toError"/>
                <m-input v-model="subject" class=" my-4" name="subject" type="email" required :error="toError"/>
                <m-textarea v-model="text" class="my-4" name="text" type="text" />
                <m-textarea v-model="html" class=" my-4" name="html" type="text" />
                <input class=" my-4" type="file" placeholder="Choose Attachments" name="attachment[]" @change="onFileChange" multiple>
            </form>
            <button class="bg-primary text-white self-center w-1/2 p-2 rounded-md my-5" @click="submitClicked">Submit</button>
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
export default {
    name: "Create",
    components: {PreviewEmail, MTextarea, MInput},
    data:function (){
        return {
            to:null,
            from:null,
            subject:null,
            text:null,
            html:null,
            attachments:0,
            toError:false,
            fromError:false,
            subjectError:false,
        }
    },
    methods:{
        onFileChange(event){
            this.attachments = [];
            const n = event.target.files.length
            for (let i=0;i<n;i++){
                this.attachments.push(event.target.files[i].name)
            }
        },
        ValidateEmail(mail)
        {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
            {
                return (true)
            }
            alert("You have entered an invalid email address!")
            return (false)
        },
        submitClicked(){
            console.log(this.to);
        }
    }
}
</script>

<style scoped>

</style>
