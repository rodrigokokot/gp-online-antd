const routes = [
    {
        path: "/gestionAprobaciones",
        name: "Gestion de Aprobaciones",
        options:["Novedades por confirmar","Ajustes por Confirmar"],
        icon: 'HomeOutlined',
        page: 'GestionAprobaciones'
    },
    {
        path: "/parametrosPrincipales",
        name: "Parametros principales",
        icon: "ReconciliationOutlined",
        page: 'ParametrosPrincipales'
    },
    {
        path: "/home",
        name: "Inicio",
        icon: 'UserOutlined',
        page: 'Home'
    },
    {
        path: "/page1",
        name: "Página 1",
        icon: 'BoxPlotOutlined',
        page: 'Page1'
    },


];

export default routes