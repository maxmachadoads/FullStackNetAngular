using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        private readonly DataContext _context;

        public EventosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Evento>>> Get()
        {
            var eventos = await _context.Eventos.ToListAsync();

            return Ok(eventos);
        }
/*
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Evento>> GetById([FromRoute] int id)
        {
            var evento = await _context.Eventos
                .FirstOrDefaultAsync(evento => evento.EventoId == id);

            if (evento == null)
            {
                return NotFound();
            }

            return Ok(evento);
        }*/
        [HttpGet("{id:int}")]
        public Evento GetById([FromRoute] int id)
        {
            return _context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
        }
    }
}