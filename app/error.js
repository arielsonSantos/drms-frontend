"use client";

import NetworkError from "./_sharedComponents/networkError";

export default function Error({ error, reset }) {
    return (
        <NetworkError error={error} reset={reset} />
    );
}