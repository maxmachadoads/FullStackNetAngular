using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Persistence.Contratos;
using ProEventos.Persistence.Contextos;

namespace ProEventos.Persistence
{
    public class EventoPersist : IEventoPersist
    {
        private readonly ProEventosContext _context;

        public EventoPersist(ProEventosContext context)
        {
            _context = context;
        }
        
        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.Include(e => e.Lote)
                .Include(e => e.RedesSociais);
            query = query.OrderBy(e => e.Id);

            if (includePalestrantes)
            {
                query = query.AsNoTracking().Include(e => e.PalestranteEventos)
                    .ThenInclude(pe => pe.Palestrante);
            }

            return await query.ToArrayAsync();
        }
        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.Include(e => e.Lote)
                .Include(e => e.RedesSociais);
            query = query.OrderBy(e => e.Id);

            if (includePalestrantes)
            {
                query = query.Include(e => e.PalestranteEventos)
                    .ThenInclude(pe => pe.Palestrante);
            }
            
            query = query.AsNoTracking().OrderBy(e => e.Id)
                .Where(e => e.Tema.ToLower().Contains(tema.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Evento> GetEventoByIdsync(int EventoId, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.Include(e => e.Lote)
                .Include(e => e.RedesSociais);
            query = query.OrderBy(e => e.Id);

            if (includePalestrantes)
            {
                query = query.Include(e => e.PalestranteEventos)
                    .ThenInclude(pe => pe.Palestrante);
            }

            query = query.AsNoTracking().OrderBy(e => e.Id)
                .Where(e => e.Id == EventoId);

            return await query.FirstOrDefaultAsync();
        }     
      
    }
}