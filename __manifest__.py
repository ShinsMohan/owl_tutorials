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
    ],


    'installable': True,
    'auto_install': False,
    'application': False,
    'assets': {

        'web.assets_backend': [
            'owl_tutorials/static/src/components/*/*.js',
            'owl_tutorials/static/src/components/*/*.xml',
            'owl_tutorials/static/src/components/*/*.scss',
        ]
    }
}