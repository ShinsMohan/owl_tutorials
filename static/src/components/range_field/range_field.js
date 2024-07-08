/** @odoo-module */

import { registry } from "@web/core/registry";
import { standardFieldProps } from "../standard_field_props";

import { Component, useState, onWillUpdateProps } from "@odoo/owl"

export class RangeField extends Component {
    setup() {
        this.state = useState({
            range: this.props.value || '',
        })
    }
}

RangeField.template = "web.RangeField";

registry.category("fields").add("range", RangeField);