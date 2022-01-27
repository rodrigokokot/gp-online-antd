const routes = [
    {
        path: "/gestionAprobaciones",
        name: "Gestion de Aprobaciones",
        icon: 'HomeOutlined',
        page: 'GestionAprobaciones'
    },
    {
        path: "/parametrosPrincipales",
        name: "Parametros principales",
        icon: "FileDoneOutlined",
        page: 'ParametrosPrincipales',
        subItems: [
            {
                path: "/parametrosPrincipales/gestionSucursales",
                name: "Gestión de Sucursales",
                page: 'GestionSucursales',
            },
        ]
    },
    {
        path: "/usuarios",
        name: "Usuarios",
        icon: "UserOutlined",
        page: 'Usuarios',
        subItems: [
            {
                path: "/usuarios/gestionUsuarios",
                name: "Gestión de usuarios",
                icon: 'BoxPlotOutlined',
                page: 'GestionUsuarios',
            },
            {
                path: "/usuarios/gestionDePerfiles",
                name: "Gestión de Perfiles",
                icon: 'BoxPlotOutlined',
                page: 'GestionSucursales',
            },
        ]
    },
    {
        path: "/movimientos",
        name: "Movimientos",
        icon: "SwapOutlined",
        page: 'Movimientos',
        subItems: [
            {
                path: "/movimientos/IPM",
                name: "IPM",
                page: 'GestionSucursales',
            },
            {
                path: "/movimientos/CTF",
                name: "CTF",
                page: 'GestionSucursales',
            },
        ]
    },
    {
        path: "/emision",
        name: "Emision",
        icon: "UserSwitchOutlined",
        page: 'ParametrosPrincipales',
        subItems: [
            {
                path: "/emision/movimientos",
                name: "Movimientos",
                page: 'GestionSucursales',
            },
            {
                path: "/emision/socios",
                name: "Socios",
                page: 'GestionSucursales',
            },
        ]
    },
    {
        path: "/parametria",
        name: "Parametria",
        icon: "BarChartOutlined",
        page: 'Parametria',
    },
    {
        path: "/adquirencia",
        name: "Adquirencia",
        icon: "PieChartOutlined",
        page: 'ParametrosPrincipales',
    },
    {
        path: "/ayuda",
        name: "Ayuda",
        icon: 'QuestionCircleOutlined',
        page: 'Ayuda'
    },

];

export default routes