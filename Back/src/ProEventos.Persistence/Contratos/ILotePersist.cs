using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface ILotePersist
    {
        /// <summary>
        /// Método get que retornará uma lista de Lotes por eventoId.
        /// </summary>
        /// <param name="eventoId">Código chave da tabela lote lote</param>
        /// <returns>Lista de Lotes</returns>
        Task<Lote[]> GetLotesByEventosIdAsync(int eventoId);
        ///<summary>
        /// Métodos get que retornará apenas 1 Lote.
        /// </summary>
        /// <param name="eventoId">Código chave da tabela evento</param>
        /// <param name="loteId">Código chave da tabela lote lote</param>
        /// <returns>Apenas 1 Lote</returns>
        Task<Lote> GetLoteByIdsAsync(int eventoId, int loteId);
      }
}