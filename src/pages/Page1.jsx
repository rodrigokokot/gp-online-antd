import React, { createElement } from 'react'
import Table from '../components/Table'
import PruebaComponent from '../components/PruebaComponent'
import {DownOutlined} from '@ant-design/icons'

function Page1() {
    const columns = [
        {
            name: 'Title',
            // selector: row => row.title,
            cell: row => <div><div style={{ fontWeight: 700 }}>{row.title}</div>{row.summary}</div>,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
         {
            cell: row => <DownOutlined />,
            allowOverflow: true,
            button: true,
            width: '56px',
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    return (
        <div>
            <Table component={PruebaComponent} columns={columns} data={data} />
        </div>
    )
}

export default Page1
