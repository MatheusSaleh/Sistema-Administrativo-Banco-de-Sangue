import { DatePipe } from "@angular/common";

/**
 * @Author Sd Saleh
 *
 * Classe DataConverter
 *
 * Esta classe fornece um método estático para formatar strings de data em um formato de data especificado
 * usando o DatePipe do Angular.
 */
export class DataConverter {

  /**
   * Método formartarData
   * @Author Sd Saleh
   *
   * @description:
   * Este método recebe uma string de data como entrada, converte-a para um objeto JavaScript Date e,
   * em seguida, utiliza o DatePipe para formatá-la no formato de data desejado ('dd/MM/yyyy'). A data
   * formatada é retornada como uma string.
   *
   * @param:
   *  - `data`: Uma string representando a data a ser formatada. Pode ser `undefined`.
   *
   * @return:
   *  - Uma string representando a data formatada no formato 'dd/MM/yyyy'. Se a data de entrada for `undefined`,
   *    uma string vazia é retornada.
   *
   * @example:
   * ```typescript
   * const formattedDate = DataConverter.formartarData('2022-01-15T12:30:00');
   * console.log(formattedDate); // Saída: '15/01/2022'
   * ```
   */
  public static formartarData(data: string | undefined): string {
    if (!data) {
      return '';
    }

    const dataFormatada = new Date(data);

    return new DatePipe('en-US').transform(dataFormatada, 'dd/MM/yyyy') || '';
  }
}
