"use client";

import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

export default function NetworkError({ error, reset }) {
    const router = useRouter();
    const reload = reset || router.refresh;

    toast.error(`Erro: ${error.message}`);

    return (
        <div>
            <div className="d-flex justify-content-center">
                <p>Erro: {error.message}</p>
            </div>
            <div className="d-flex justify-content-center">
                <Button className="btn btn-danger" onClick={() => reload()}>Recarregar</Button>
            </div>
        </div>
    );
}