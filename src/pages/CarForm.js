import React, {useEffect, useState} from "react";
import {Form, Input, Button, Select, Upload, Row, Col} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

function CarForm({ onFinish }) {
    const [category,setCategory] = useState([])
    const [form] = Form.useForm();
    useEffect(()=>{
        axios.get('https://backend.avtosaltanat.uz/pro/api/category/').then((res)=>{
            setCategory(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (

<div className="container mx-auto">
    <Form
        form={form}
        layout="vertical"
        onFinish={onFinish} // submit bo‘lganda chaqiriladi
    >
        <Row gutter={2}>
            <Col span={8}>
                <Form.Item
                    label="Mashina nomi"
                    name="title"
                    rules={[{ required: true, message: "Mashina nomini kiriting!" }]}
                >
                    <Input size={'large'} placeholder="" />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="File Url"
                    name="file"
                    rules={[{ required: true, message: "Mashina nomini kiriting!" }]}
                >
                    <Input size={'large'} placeholder="" />
                </Form.Item>
            </Col>

        </Row>
        <Row>
            <Col span={8}>
                <Form.Item
                    label="Narxi"
                    name="price"
                    rules={[{ required: true, message: "Narxi" }]}
                >
                    <Input size={'large'} placeholder="" />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Batafsil Ma'lumot"
                    name="description"
                    rules={[{ required: true, message: "Mashina nomini kiriting!" }]}
                >
                    <TextArea></TextArea>
                </Form.Item>
            </Col>
        </Row>




        <Row>
            <Col span={8}>
                <Form.Item
                    label="Kategoriya"
                    name="category"
                    rules={[{ required: true, message: "Kategoriya tanlang!" }]}
                >
                    <Select size={'large'} placeholder="Kategoriya tanlang">
                        {
                            category.length > 0 ? (
                                    category.map(item=>(
                                        <Option value={item.title}>{item.title}</Option>
                                    ))
                                )
                                :
                                <p>loading...</p>
                        }

                    </Select>
                </Form.Item>


            </Col>
            <Col span={8}>

                <Form.Item label="Mashina rasmi" name="image">
                    <Upload  listType="picture" beforeUpload={() => false}>
                        <Button icon={<UploadOutlined />}>Rasm yuklash</Button>
                    </Upload>
                </Form.Item>
            </Col>
        </Row>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Saqlash
            </Button>
        </Form.Item>
    </Form>
</div>
    );
}

export default CarForm;
