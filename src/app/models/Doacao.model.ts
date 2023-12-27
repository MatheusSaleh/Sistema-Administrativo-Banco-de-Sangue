import { Doador } from "./Doador.model";
import { Enfermeiro } from "./Enfermeiro.model";

export class Doacao{
    public enfermeiro: Enfermeiro | undefined;

    public doador: Doador | undefined;

    public dataDoacao: String | undefined;

    public tipoDoacao: String | undefined;

    public statusDoacao: String | undefined;
}