const routes = [
    {
        name: "Gestión de Aprobaciones",
        icon: 'HomeOutlined',
        path: "/gestionAprobaciones",
    },
    {
        name: "Parametros principales",
        icon: "FileDoneOutlined",
        subItems: [
            {
                path: "/parametrosPrincipales/gestionSucursales",
                name: "Gestión de Sucursales",
            },
        ]
    },
    {
        name: "Usuarios",
        icon: "UserOutlined",
        subItems: [
            {
                name: "Gestión de usuarios",
                path: "/usuarios/gestionUsuarios",

            },
            {
                name: "Gestión de Perfiles",
                path: "/usuarios/gestionDePerfiles",

            },
        ]
    },
    {
        name: "Movimientos",
        icon: "SwapOutlined",
        subItems: [
            {
                name: "IPM",
                path: "/movimientos/IPM",
            },
            {
                name: "CTF",
                path: "/movimientos/CTF",
            },
        ]
    },
    {
        name: "Emisión",
        icon: "UserSwitchOutlined",
        subItems: [
            {
                name: "Movimientos",
                subItems: [
                    {
                        name: "Autorizaciones",
                        path: "/emision/movimientos/autorizaciones",
                    },
                    {
                        name: "Consumos",
                        path: "/emision/movimientos/consumos",
                    },
                    {
                        name: "Cargas",
                        path: "/emision/movimientos/cargas",
                    },
                ]
            },
            {
                name: "Cargos y ajustes",
                subItems: [
                    {
                        name: "Cambio de estado",
                        path: "/emision/cargosAjustes/cambioDeEstado",
                    },
                    {
                        name: "Tipos de Cargos",
                        path: "/emision/cargosAjustes/tiposDeCargos",
                    },
                    {
                        name: "Cargos por Productos",
                        path: "/emision/cargosAjustes/cargosPorProductos",
                    },
                    {
                        name: "Cargos por Productos y Afinidad",
                        path: "/emision/cargosAjustes/cargosPorProductosAfinidad",
                    },
                    {
                        name: "Cargos por Productos y Movimientos",
                        path: "/emision/cargosAjustes/cargosPorProductosMovimientos",
                    },
                    {
                        name: "Consulta de liquidaciones",
                        path: "/emision/cargosAjustes/consultaDeLiquidaciones",
                    },
                    {
                        name: "Publicacion en Boletin",
                        path: "/emision/cargosAjustes/publicacionEnBoletin",
                    },
                ]
            },
            {
                name: "Socios",
                subItems: [
                    {
                        name: "Cuentas",
                        path: "/emision/socios/cuentas",
                    },
                    {
                        name: "Movimiento de cuentas",
                        path: "/emision/socios/movimientosDeCuenta",
                    },
                    {
                        name: "Adicionales",
                        path: "/emision/socios/adicionales",
                    },
                    {
                        name: "Tarjetas",
                        path: "/emision/socios/tarjetas",
                    },
                    {
                        name: "Avisos de Viajes",
                        path: "/emision/socios/avisosDeViajes",
                    },
                ]
            }, 
        ]
    },
    {
        name: "Parametría", 
        icon: "BarChartOutlined",
        subItems:[ 
            {
                name: "Modificar Límite de Tarjetas Adicionales",
                path: "/parametria/modificarLimite",
            },
        ]
    },
    {
        name: "Adquirencia",
        path: "/adquirencia",
        icon: "PieChartOutlined",
    },
    // {
    //     path: "/ayuda",
    //     name: "Ayuda",
    //     icon: 'QuestionCircleOutlined',
    //     page: 'Ayuda'
    // },

];

export default routes