import {EntidadeAdministrativa} from "../../domain/Concello";

export function EntidadesAdministrativasForm(props: { setEntidate: (entidade: EntidadeAdministrativa) => void }) {
    const {handleSubmit} = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        </form>
    );
}
