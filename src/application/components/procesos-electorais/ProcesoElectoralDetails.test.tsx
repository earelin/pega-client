import {when} from "jest-when";
import {ProcesoElectoral, useProcesoElectoralStore} from "../../../domain/ProcesoElectoral";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {DateTime} from "luxon";
import {UseQueryResult} from "@tanstack/react-query";
import {ProcesoElectoralDetails} from "./ProcesoElectoralDetails";

jest.mock("../../../domain/ProcesoElectoral");

describe('ProcesoElectoralDetails Component', () => {
    test('should show proceso with ambito', () => {
        when(useProcesoElectoralStore)
            .calledWith(2)
            .mockReturnValue(PROCESO_ELECTORAL_WITH_AMBITO);

        render(<BrowserRouter><ProcesoElectoralDetails id={2} /></BrowserRouter>);

        expect(screen.getByText(/Data:\s*17\/6\/2022/))
            .not.toBeNull();
        expect(screen.getByText(/Tipo:\s*Autonómicas/))
            .not.toBeNull();
        expect(screen.getByText(/Ámbito:\s*12/))
            .not.toBeNull();
    });

    test('should show proceso without ambito', () => {
        when(useProcesoElectoralStore)
            .calledWith(1)
            .mockReturnValue(PROCESO_ELECTORAL_WITHOUT_AMBITO);

        render(<BrowserRouter><ProcesoElectoralDetails id={1} /></BrowserRouter>);

        expect(screen.getByText(/Data:\s*25\/4\/2023/))
            .not.toBeNull();
        expect(screen.getByText(/Tipo:\s*Congreso/))
            .not.toBeNull();
        expect(screen.queryByText(/Ámbito:\s*12/))
            .toBeNull();
    });

    test('should show higher level common data', () => {
        when(useProcesoElectoralStore)
            .calledWith(1)
            .mockReturnValue(PROCESO_ELECTORAL_WITHOUT_AMBITO);

        render(<BrowserRouter><ProcesoElectoralDetails id={1} /></BrowserRouter>);
    })
});

const PROCESO_ELECTORAL_WITH_AMBITO = {
    data: {
        id: 2,
        tipo: "AUTONOMICAS",
        ambito: 12,
        data: DateTime.fromISO("2022-06-17T00:00:00.000Z")
    }
} as UseQueryResult<ProcesoElectoral, unknown>;

const PROCESO_ELECTORAL_WITHOUT_AMBITO = {
    data: {
        id: 1,
        tipo: "CONGRESO",
        ambito:null,
        data: DateTime.fromISO("2023-04-25T00:00:00.000Z")
    }
} as UseQueryResult<ProcesoElectoral, unknown>;