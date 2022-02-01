import React, { useContext, useEffect, useState } from 'react'
import Table from '../components/organisms/Table'
import DeploymentConfirmation from '../components/molecules/DeploymentConfirmation'
import Icon, {DownOutlined} from '@ant-design/icons'
import FloatInput from '../components/molecules/FloatInput'
import FloatSelected from '../components/molecules/FloatSelected'
import { Form, Card, Switch } from "antd";
import DateRangeFilter from '../components/organisms/DateRangeFilter'
import {HelpImg, LoginImg} from '../assets/svg/img'
import InlineSVG from 'svg-inline-react';
import ResultSearch from '../components/molecules/ResultSearch'
import BreadComponent from '../components/molecules/Breadcrum'
import UserContext from '../context/User/UserContext'

const validator = {
    require: {
      required: true,
      message: "Required"
    }
  };

function Page1() {

    const { user, getUser } = useContext(UserContext);

    useEffect(() => {
        getUser();
        console.log(user);
    }, [])

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

    const [noResult, setNoResult] = useState(false);

    return (
        <>
            <BreadComponent />
            <ResultSearch />
            {/* <DateRangeFilter /> */}

            {/* <ReactCountryFlagsCurrencySelect
                searchable={true}
                searchPlaceholder="Search for a country" /> */}

            {/* <div  style={{ marginBottom: '25px' }}>
                <DateRangePicker />
            </div> */}
            {/* <Card style={{marginTop:'50px', marginBottom: '50px'}}>
                <Form
                    size="large"
                    name="user_login"
                    className="login-form"
                    layout="vertical"
                >
                    <Form.Item name="email" rules={[validator.require]} hasFeedback>
                        <FloatInput
                            label="Email"
                            placeholder="Email here please"
                            name="email"
                        />
                    </Form.Item>
                    <Form.Item name="email" rules={[validator.require]} hasFeedback>
                        <FloatInput
                            label="Email"
                            placeholder="Email here please"
                            name="email"
                            outline
                        />
                    </Form.Item>
                    <Form.Item name="algo" rules={[validator.require]} hasFeedback>
                        <FloatSelected
                            label="Email"
                            placeholder="Email here please"
                            name="email"
                            outline
                            options={ [
                                {
                                    title: "",
                                    value: "",
                                    disabled: false
                                },
                                {
                                    title: "Title 1",
                                    value: "title1",
                                    disabled: false
                                },
                                {
                                    title: "Title 2",
                                    value: "title2",
                                    disabled: false
                                },
                                {
                                    title: "Title 3",
                                    value: "title3",
                                    disabled: true
                                },
                            ] }
                        />
                    </Form.Item>
                    <Form.Item name="algo" rules={[validator.require]} hasFeedback>
                        <FloatSelected
                            label="Email"
                            placeholder="Email here please"
                            name="email"
                            options={ [
                                {
                                    title: "",
                                    value: "",
                                    disabled: false
                                },
                                {
                                    title: "Title 1",
                                    value: "title1",
                                    disabled: false
                                },
                                {
                                    title: "Title 2",
                                    value: "title2",
                                    disabled: false
                                },
                                {
                                    title: "Title 3",
                                    value: "title3",
                                    disabled: true
                                },
                            ] }
                        />
                    </Form.Item>
                </Form>
            </Card>

            <Switch onChange={() => setNoResult(!noResult)} />
            <Table component={DeploymentConfirmation} columns={columns} data={ noResult? data : [] } />

            <InlineSVG src={LoginImg} /> */}
        </>
    )
}

export default Page1
