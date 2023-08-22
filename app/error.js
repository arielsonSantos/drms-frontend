"use client";

import NetworkError from "./_shared/_sharedComponents/networkError";

export default function Error({ error, reset }) {
    return (
        <NetworkError error={error} reset={reset} />
    );
}