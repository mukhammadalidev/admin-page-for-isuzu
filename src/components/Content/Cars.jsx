import React from 'react';
import {Button, Image, Table} from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import AddCars from "./AddCars";
import {Link} from "react-router-dom";
function Cars({products}) {
    let columns = [
        {
            title:'№',
            dataIndex: 'index',
            render:(_,__,idx)=>idx+1

        },
        {
            title:'mashina nomi:'+products.length,
            dataIndex:'title',
        },
        {
            title:'Kategoriya',
            dataIndex:'category',
            render:(text)=>{
                return text.title
            }
        },
        {
            title:'Narxi',
            dataIndex:'price',
            render:(item)=>{
                return `${item},000,000`
            }
        },
        {
            title:'mashina surati',
            dataIndex: 'image',
            render:(text)=>{
                return <Image src={text} height={20} />
            }
        },
        {
            title: "Yoqilg'i turi",
            dataIndex: 'technical_specification',

            render:(item)=>{
                return item.fuel_type
            },

        },
        {
            title: 'Masa',
            dataIndex: 'technical_specification',
            render:(text)=>{
                return text.max_weight + ' kg'
            }
        },
        {
            title: 'active',
            dataIndex: 'active',

            render:()=>{
                return (
                    <div>
                        <Button>
                            <BiEditAlt />
                        </Button>
                        &nbsp;
                        <Button danger={true}>
                            <RiDeleteBinLine />
                        </Button>
                    </div>
                )
            }
        },


    ]
    return (
        <div>
            <div className={'float-end m-3'}>
               <Link to={'/add-cars'}> <Button type={'primary'}>Mashina Qo'shish <FaPlus /></Button></Link>
            </div>
            {
                products.length > 0 ? (
                    <Table bordered columns={columns} dataSource={products} pagination={10} />
                    )
                    :
                    <p>Loading....</p>
            }
        </div>
    );
}

export default Cars;
