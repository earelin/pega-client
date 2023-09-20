import {render, screen} from "@testing-library/react";
import {when} from "jest-when";
import {UseQueryResult} from "@tanstack/react-query";
import {DateTime} from "luxon";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ProcesoElectoral, useProcesosElectoraisStore} from "../../../domain/ProcesoElectoral";
import {ProcesosElectoraisLista} from "./ProcesosElectoraisLista";

jest.mock("../../../domain/ProcesoElectoral");

describe('ProcesosElectoraisLista Component', () => {
    test('should show list', () => {
        when(useProcesosElectoraisStore)
            .calledWith()
            .mockReturnValue(PROCESOS_ELECTORAIS);

        render(<BrowserRouter><ProcesosElectoraisLista /></BrowserRouter>);

        expect(screen.getByText(/Municipais\s*21\/11\/2021/))
            .not.toBeNull();
        expect(screen.getByText(/Autonómicas\s*17\/6\/2022/))
            .not.toBeNull();
    });
});

const PROCESOS_ELECTORAIS = {
    data: [
        {
            id: 1,
            tipo: "MUNICIPAIS",
            ambito: null,
            data: DateTime.fromISO("2021-11-21T00:00:00.000Z")
        },
        {
            id: 2,
            tipo: "AUTONOMICAS",
            ambito: 12,
            data: DateTime.fromISO("2022-06-17T00:00:00.000Z")

        }
    ]
} as UseQueryResult<ProcesoElectoral[], unknown>;
