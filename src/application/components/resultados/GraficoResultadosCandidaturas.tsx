import {ResultadoCandidatura} from "../../../domain/ResultadosElectorais";
import {Cell, Pie, PieChart, ResponsiveContainer} from "recharts";
import {partidoColor} from "../../../commons/colors";

export function GraficoResultadosCandidaturas(props: {data: ResultadoCandidatura[] | undefined}) {
    if (!props.data) return (<ResponsiveContainer width="100%" height={400}><PieChart/></ResponsiveContainer>)

    const total = props.data.reduce((acc, resultado) => acc + resultado.votos, 0);

    const graphData = props.data
        .filter(resultado => resultado.votos > total * 0.02)
        .map(resultado => ({
            nome: resultado.candidatura.nome,
            votos: resultado.votos
        }));
    const graphDataTotal = graphData.reduce((acc, resultado) => acc + resultado.votos, 0);
    graphData.push({
        nome: "Outros",
        votos: total - graphDataTotal
    });

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie data={graphData} dataKey="votos" label={renderCustomizedLabel}>
                    {
                        graphData.map((entry, index) => (
                            <Cell key={`cell-${entry.nome}`} fill={ partidoColor(entry.nome)}/>
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

const RADIAN = Math.PI / 180;

function renderCustomizedLabel(props: {nome: string, cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number}) {
    const radius = props.outerRadius * 1.2;
    const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
    const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="gray" textAnchor={x > props.cx ? 'start' : 'end'} dominantBaseline="central">
            {props.nome}
        </text>
    );
}
