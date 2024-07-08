/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog"


const { component, useSubEnv, useState } = owl


export class OwlOdooServices extends Component {
    setup(){
        console.log('owl odoo services')
        this.display = {
            controlPanel: {"top-right": false, "bottom-right": false}
        }

        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            }
        })

        this.state = useState({
            get_http_data: []
        })


        // this.cookieService = useService("cookie")
        // console.log(this.cookieService)

        // if (this.cookieService.current.dark_theme == undefined){
        //     this.cookieService.setCookie("dark_theme", false)
        // }

        // this.state = useState({
        //     dark_theme: this.cookieService.current.dark_theme
        // })


    }

    showNotification(){
        const notification = this.env.services.notification
        notification.add('This is a sample notification',{
            title: "Odoo notification service",
            type: "info", //bootsrap colors - info,danger,success,warning
            sticky: true, //doesnt automatically close
            //className:

        })
    }

    showDialog(){
        const dialog = this.env.services.dialog
        dialog.add(ConfirmationDialog, {
            title: "Dialog Service",
            body: "are you sure want to continue his action?",
            confirm: ()=>{
                console.log("Dialog Confirmed")
            },
            cancel: ()=>{
                console.log("Dialog Cancelled")
            }
        })
        console.log(dialog)
    }

    showEffect(){
        const effect = this.env.services.effect
        console.log(effect)
        effect.add({
            type: "rainbow_man",
            message: "you are now a member of LGTVQ"
        })
    }

    // setCookieService(){
    //     if (this.cookieService.current.dark_theme == 'false'){
    //         this.cookieService.setCookie("dark_theme", true)
    //     } else {
    //         this.cookieService.setCookie("dark_theme", false)
    //     }

    //     this.state.dark_theme = this.cookieService.current.dark_theme
    // }

    async getHttpService(){ //expecting a response
        const http = this.env.services.http
        console.log(http)
        const data = await http.get('https://dummyjson.com/products')
        console.log(data)
        this.state.get_http_data = data.products
    }
}

OwlOdooServices.template = 'owl.OdooServices'
OwlOdooServices.components = { Layout }

registry.category('actions').add('owl.OdooServices', OwlOdooServices)