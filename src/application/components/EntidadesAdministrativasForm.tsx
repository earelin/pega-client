import {
    EntidadeAdministrativa,
    NivelAdministrivo,
    useEntidadesAdministrativasStore
} from "../../domain/EntidadeAdministrativa";
import {FormContainer, SelectElement} from "react-hook-form-mui";

export function EntidadesAdministrativasForm(props: { setEntidate: (entidade: EntidadeAdministrativa) => void }) {
    const {data: comunidadesAutonomas} = useEntidadesAdministrativasStore();
    const {data: provincias} = useEntidadesAdministrativasStore(NivelAdministrivo.PROVINCIA);

    return (
        <FormContainer>
            <SelectElement sx={{minWidth: 350, margin: 1}}
                           name={"comunidadeAutonoma"}
                           label={"Comunidade autónoma"}
                           options={comunidadesAutonomas}
                           labelKey={"nome"}
                           valueKey={"id"}/>

            <SelectElement sx={{minWidth: 350, margin: 1}}
                           name={"provincia"}
                           label={"Provincia"}
                           options={provincias}
                           labelKey={"nome"}
                           valueKey={"id"}/>
        </FormContainer>
    );
}
