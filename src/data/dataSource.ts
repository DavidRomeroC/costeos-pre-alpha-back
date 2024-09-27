export const catalogos = [
    {
        id: 12,
        name: "Super G Centro",
        productos: [
            {
                uuid: 1,
                codePlu: 100,
                verdura: "Acelga",
                cantidad: 0,
                pesada: 0,
                costo: 0,
                costocaja: 0,
                tara: 0,
                numxpieza: 0,
                promedio: 0,
                entero: true
            },
            {
                uuid: 2,
                codePlu: 102,
                verdura: "Aguacate",
                cantidad: 0,
                pesada: 0,
                costo: 0,
                costocaja: 0,
                tara: 0,
                numxpieza: 0,
                promedio: 0,
                entero: true
            }
        ]
    },
    {
        id: 456,
        name: "Super 7",
        productos: [
            {
                uuid: 3,
                codePlu: 100,
                verdura: "Acelga",
                cantidad: 0,
                pesada: 0,
                costo: 0,
                costocaja: 0,
                tara: 0,
                numxpieza: 0,
                promedio: 0,
                entero: true
            },
            {
                uuid: 4,
                codePlu: 102,
                verdura: "Aguacate",
                cantidad: 0,
                pesada: 0,
                costo: 0,
                costocaja: 0,
                tara: 0,
                numxpieza: 0,
                promedio: 0,
                entero: true
            }
        ]
    }
]


export const costeos = [
    {
        uuid: 4125,
        fecha: "2024-05-31",
        costea: "David",
        comprador: "Romero",
        monto: 95000,
        sucursales: [
            {
                name: "Super G centro",
                productos: {
                    acelga: 0,
                    aguacate: 0
                }
            },
            {
                name: "Super 7",
                productos: {
                    acelga: 0,
                    aguacate: 0
                }
            }
        ]
    },
    {
        uuid: 46542,
        fecha: "2024-07-10",
        costea: "David",
        comprador: "Romero",
        monto: 78500,
        sucursales: [
            {
                name: "Super G centro",
                productos: {
                    acelga: 0,
                    aguacate: 0
                }
            },
            {
                name: "Super 7",
                productos: {
                    acelga: 0,
                    aguacate: 0
                }
            }
        ]
    }
]