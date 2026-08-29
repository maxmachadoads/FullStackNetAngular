using Microsoft.AspNetCore.Mvc;
using ProEventos.Application.Contratos;
using ProEventos.Application.Dtos;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        private readonly IEventosServices _eventosServices;
        private readonly IWebHostEnvironment _hostEnvironment;

        public EventosController(IEventosServices eventosServices, IWebHostEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;
            _eventosServices = eventosServices;

        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var eventos = await _eventosServices.GetAllEventosAsync(true);
                if (eventos == null) return NoContent();



                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetById([FromRoute] int id)
        {
            try
            {
                var evento = await _eventosServices.GetEventoByIdAsync(id, true);
                if (evento == null) return NoContent();

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }
        [HttpGet("tema/{tema}")]
        public async Task<ActionResult> GetByTema([FromRoute] string tema)
        {
            try
            {
                var evento = await _eventosServices.GetAllEventosByTemaAsync(tema, true);
                if (evento == null || evento.Length == 0) return NoContent();

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }

        [HttpPost("upload-image/{eventoId:int}")]
        public async Task<ActionResult> UploadImagem([FromRoute] int eventoId)
        {
            try
            {
                var evento = await _eventosServices.GetEventoByIdAsync(eventoId);
                if (evento == null) return NoContent();

                var file = Request.Form.Files[0];
                if (file.Length > 0)
                {
                    DeleteImage(evento.ImagemURL);
                    evento.ImagemURL = await SaveImage(file);
                }

                var EventoRetorno = await _eventosServices.UpdateEventos(eventoId, evento);

                return Ok(EventoRetorno);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar adicionar eventos. Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(EventoDto model)
        {
            try
            {
                var evento = await _eventosServices.AddEventos(model);
                if (evento == null) return BadRequest("Erro ao tentar adicionar eventos.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar adicionar eventos. Erro: {ex.Message}");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put([FromRoute] int id, EventoDto model)
        {
            try
            {
                var evento = await _eventosServices.UpdateEventos(id, model);
                if (evento == null) return BadRequest("Erro ao tentar atualizar eventos.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar atualizar eventos. Erro: {ex.Message}");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            try
            {
                var evento = await _eventosServices.GetEventoByIdAsync(id, true);
                if(evento == null) return NoContent();

                if (await _eventosServices.DeleteEvento(id))
                {
                    DeleteImage(evento.ImagemURL);
                    return Ok(new { message = "Deletado" });
                }
                else
                {
                    return BadRequest("Evento não deletado");
                }
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar excluir eventos. Erro: {ex.Message}");
            }
        }

        [NonAction]
        private async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new string(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');

            imageName = $"{imageName}{DateTime.UtcNow.ToString("yymmssfff")}{Path.GetExtension(imageFile.FileName)}";

            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, @"Resources/Images",imageName);

            using(var filesStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(filesStream);
            }

            return imageName;
        }

        [NonAction]
        private void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, @"Resources/Images", imageName);
            if (System.IO.File.Exists(imagePath))
            {
                System.IO.File.Delete(imagePath);
            }
        }

    }
}