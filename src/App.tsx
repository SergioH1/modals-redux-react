import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/modal";

import { showModalAction } from "./redux/modal.actions";
import { useDispatch, useSelector, useStore } from "react-redux/es/exports";

function App() {
    const dispatcher = useDispatch();

    function onClickModal() {
        dispatcher(
            showModalAction({
                title: "hola Mundo",
                description: "Programando un domingo",
            })
        );
    }
    return (
        <>
            <Modal />
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <button onClick={onClickModal}></button>
                </header>
            </div>
        </>
    );
}

export default App;
