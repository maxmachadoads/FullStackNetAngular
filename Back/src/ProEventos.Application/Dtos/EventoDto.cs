using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Application.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }

        public string? Local { get; set; }
     
        public string? DataEvento { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string? Tema { get; set; }
        [Required(ErrorMessage = "Favor preencher a {0} de pessoas"),
         Range(1, 120000, ErrorMessage = "{0} não pode ser menor que 1 e maior que 120000")]
        public int QtdPessoas { get; set; }
        [RegularExpression(@".*\.(gif|jpe?g|bmp|png)$", ErrorMessage = "Não é ima imagem válida (gif, jpg, jpeg, bmp ou png)")]
        public string? ImagemURL { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório"),
         Phone(ErrorMessage = "O campo {0} esta com número inválido")]
        public string? Telefone { get; set; }
        [EmailAddress(ErrorMessage = "O {0} precisa estar em um formato Valido"),
        Required(ErrorMessage = "O Campo {0} é Obrigatório")]
        public string? Email { get; set; }

        public IEnumerable<LoteDto>? Lote { get; set; }
        public IEnumerable<RedeSocialDto>? RedesSociais { get; set; }
        public IEnumerable<PalestranteDto>? Palestrantes { get; set; }
    }
}