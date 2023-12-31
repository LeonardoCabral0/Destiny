﻿namespace WebAPI.Models
{
    public class Post
    {
        public int postId { get; set; }
        public string Nome { get; set; }
        public string UF { get; set; }
        public string Cidade { get; set; }
        public string? Referencia { get; set; }
        [StringLength(100)]
        public string Descricao { get; set; }
        public DateTime Data { get; set; }
    }
}
