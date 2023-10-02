import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useResultadosCandidaturasStore} from "../../domain/ResultadosElectorais";

export function ResultadosCandidaturas(props: {id: number}) {
    const {data: resultados} = useResultadosCandidaturasStore(props.id);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">Votos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {resultados?.map(resultado =>
                        <TableRow key={resultado.candidatura.id}>
                            <TableCell>{resultado.candidatura.nome}</TableCell>
                            <TableCell align="right">{resultado.votos.toLocaleString()}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
