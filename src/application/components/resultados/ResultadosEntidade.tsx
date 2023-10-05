import {EntidadeAdministrativa} from "../../../domain/EntidadeAdministrativa";

export function ResultadosEntidade(props: { entidade: EntidadeAdministrativa | undefined }) {
    return (<h1>{props.entidade?.nome}</h1>);
}
