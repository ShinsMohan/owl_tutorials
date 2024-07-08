{
    'name': 'Owl Tutorial',
    'summary': 'Learnig Owl',
    'license': 'LGPL-3',
    'depends':['base','web'],
    'version': '1.0',
    'data': [
        'security/ir.model.access.csv',
        'views/menu.xml',
        'views/res_partner.xml',
        'views/owl.xml',
        'views/odoo_services.xml',
    ],


    'installable': True,
    'auto_install': False,
    'application': False,
    'assets': {

        'web.assets_backend': [
            'owl_tutorials/static/src/components/services/*.js',
            'owl_tutorials/static/src/components/services/*.xml',
            # 'owl_tutorials/static/src/components/*/*.scss',
        ]
    }
}