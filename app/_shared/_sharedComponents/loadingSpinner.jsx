"use client";

import Spinner from "react-bootstrap/Spinner";

export default function LoadingSpinner() {
    return (
        <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Carregando...</span>
            </Spinner>
        </div>
    );
}