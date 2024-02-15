import { Doador } from "./Doador.model";
import { Medico } from "./Medico.model";
import { Receptor } from "./Receptor.model";

export class Transfusao{
    public doador: Doador | undefined;
    public receptor: Receptor | undefined;
    public medico: Medico  | undefined;
    public dataHoraTransfusao: String | undefined;
    public tipoSangueDoador: String | undefined;
    public quantidadeTransfusa: String | undefined;
    public componentesSanguineos: String | undefined;
    public medicoResponsavel: String | undefined;
    public localTransfusao: String | undefined;
}