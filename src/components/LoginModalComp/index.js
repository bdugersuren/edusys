import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Avatar, Dropdown, Form, Input, Button, Checkbox, InputNumber } from "antd";
import { login } from "../../redux/authentication/actionCreator";




// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
};



const LoginModalComp = ({ visible, onCancel }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    useResetFormOnCloseModal({
        form,
        visible,
    });

    const onOk = () => {
        form.submit();
    };


    const onFinish = (values) => {
        console.log("==========> ", values.username, values.password, " <===============");
        dispatch(login(values.username, values.password))
            .then(() => {
                //history.push('/taskbank');
                console.log("--- Login----");
                //window.location.reload();
            }).catch((e) => {
                console.log('Received values of form: ', values);
            });
        onCancel();
        
    };
    return (
        <Modal
            title="Тестийн системд нэвтрэх"
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}

        >
            <Form form={form}
                layout="vertical"
                name="userForm"
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    label="Нэвтрэх нэр"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >

                    <Input />
                </Form.Item>


                <Form.Item
                    name="password"
                    label="Нууц үг"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >

                    <Input.Password />
                </Form.Item>


                <Form.Item
                    name="remember"
                    label="Нууц үгийг санах"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default LoginModalComp;