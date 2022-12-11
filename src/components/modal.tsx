import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { hideModalAction } from "../redux/modal.actions";
import { Store } from "../store/store";
import "./modal.css";

function Modal() {
    const dispatcher = useDispatch();
    const modal = useSelector((store: Store) => store.modal.modal);
    if (!modal) {
        return null;
    }

    const onCloseButtonClick = () => {
        dispatcher(hideModalAction());
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="modal-close" onClick={onCloseButtonClick}>
                    &#10005; {/* HTML code for a multiplication sign */}
                </span>
                <h1>{modal.title}</h1>
                <p>{modal.description}</p>
                <button type="button" onClick={onCloseButtonClick}>
                    Do something
                </button>
            </div>
        </div>
    );
}
export default Modal;
