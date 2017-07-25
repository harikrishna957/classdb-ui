import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClassUI from 'classui/ClassUI';
import NavBar from 'classui/Components/Navbar';
import Content from 'classui/Components/Content';
import { Formlayout } from "classui/Components/FormLayout";
import { TextField } from "classui/Components/FormLayout/TextField";
import { Checkbox } from "classui/Components/Form/Checkbox";
import { Flash } from 'classui/Components/Flash';
import Dropdown from 'classui/Components/Dropdown';
import MediaQuery from 'classui/Helper/MediaQuery';
import { Layout, Section } from 'classui/Components/Layout';

let App = (props: any) => {
    let flash = () => {
        Flash.flash((dismiss: Function) => {
            return <Formlayout label="Form1" onSubmit={(data: any) => {
                console.log("Submitted");
                dismiss();
            }}>
                <TextField name="text1" >Text1</TextField>
                <Checkbox name="checkbox" >Agree</Checkbox>
                <input type="submit" />
            </Formlayout>;
        });
    }
    return <ClassUI contentWidth={800}>
        <NavBar logo="Class-DB" />
        <Content>
            <div className="button" onClick={flash}>Create Container</div>
            <Dropdown button="Drop" push="left">
                <li>Kishore</li>
                <li>Kishore</li>
                <li>Kishore</li>
                <li>Kishore</li>
                <li>Kishore</li>
            </Dropdown>
            <MediaQuery media="screen and (min-width: 500px)">
                <Layout margin={20} gutter={10} medianomatch={{
                    direction: "column"
                }}>
                    <Section width="25%" style={{ padding: 10, backgroundColor: "tomato" }}>Section - 1</Section>
                    <Section width="40%" style={{ padding: 10, backgroundColor: "tomato" }}>Section - 2</Section>
                    <Section width="10%" style={{ padding: 10, backgroundColor: "tomato" }}>Section - 3</Section>
                    <Section width="25%" style={{ padding: 10, backgroundColor: "tomato" }}>Section - 4</Section>
                </Layout>
            </MediaQuery>
        </Content>
    </ClassUI>
};

ReactDOM.render(<App />, document.getElementById("app"));