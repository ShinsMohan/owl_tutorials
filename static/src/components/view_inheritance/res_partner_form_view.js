/** @odoo-module **/

import { registry } from "@web/core/registry";
import { formView } from "@web/views/form/form_view";
import { FormController } from "@web/views/form/form_controller";
import { useService } from "@web/core/utils/hooks";


class ResPartnerFormController extends FormController { 
    setup(){
        super.setup()
        console.log('res partner form controller')
        this.action = useService('action')
    }


}

ResPartnerFormController.template = 'owl.ResPartnerFormView'

export const resPartnerFormView = {
    ...formView,
    Controller: ResPartnerFormController,
    // buttonTemplate: "owl.ResPartnerFormView.Buttons",
}

registry.category('views').add('res_partner_form_view', resPartnerFormView)