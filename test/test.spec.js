import  {mount } from '@vue/test-utils'
import App from "@/App";
import Dashboard from "../src/components/Dashboard";

import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Test for main page' , ()=> {
    test('displays Menu', () => {
        // mount() returns a wrapped Vue component we can interact with
        const wrapper = mount(App, {
            localVue,
            router
        })
        expect(wrapper.text()).toContain("HOME")
    })

    test('displays Name', () => {
        // mount() returns a wrapped Vue component we can interact with
        const wrapper = mount(App, {
            localVue,
            router
        })
        expect(wrapper.text()).toContain("John Doe")
    })

    test('displays Name', () => {
        // mount() returns a wrapped Vue component we can interact with
        const wrapper = mount(App, {
            localVue,
            router
        })
        expect(wrapper.text()).toContain("MiniSend")
    })
})
