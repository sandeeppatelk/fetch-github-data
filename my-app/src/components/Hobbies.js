import React from "react";

export default function Hobbies({hobbies}) {
    return (
        <ul>
            {
                hobbies.map((hobbie, index)=> {
                    return (<li key={index}>{hobbie}</li>);
                })
            }
        </ul>
    );
};