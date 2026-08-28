using Microsoft.AspNetCore.Mvc;
using ProEventos.Application.Contratos;
using ProEventos.Application.Dtos;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LotesController : ControllerBase
    {
        private readonly ILoteServices _loteService;

        public LotesController(ILoteServices lotesServices)
        {
            _loteService = lotesServices;

        }

        [HttpGet("{eventoId:int}")]
        public async Task<ActionResult> Get([FromRoute] int eventoId)
        {
            try
            {
                var lotes = await _loteService.GetLotesByEventoIdAsync(eventoId);
                if (lotes == null || lotes.Length == 0) return NoContent();

                return Ok(lotes);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }


        [HttpPut("{eventoId:int}")]
        public async Task<ActionResult> Put([FromRoute] int eventoId, LoteDto[] models)
        {
            try
            {
                var lote = await _loteService.SaveLotes(eventoId, models);
                if (lote == null) return BadRequest("Erro ao tentar atualizar lotes.");

                return Ok(lote);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar atualizar eventos. Erro: {ex.Message}");
            }
        }

        [HttpDelete("{eventoId:int}/{loteId:int}")]
        public async Task<ActionResult> Delete([FromRoute] int eventoId,[FromRoute] int loteId)
        {
            try
            {
                if (await _loteService.DeleteLote(eventoId, loteId))
                {
                    return Ok(new { message = "Deletado" });
                }
                else
                {
                    return BadRequest("Lote não deletado");
                }
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar excluir eventos. Erro: {ex.Message}");
            }
        }

    }
}