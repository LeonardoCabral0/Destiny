using System.Collections;
using System;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Context;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Posts : ControllerBase
    {
        private readonly AppDbContext _context;

        public Posts(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Post>> Get()
        {
            var posts = _context.Posts.ToList();
            if (posts is null)
            {
                return NotFound("Não existem Posts");
            }
            return posts;
        }

        [HttpGet("{id}", Name = "ObterPost")]
        public ActionResult<Post> Get(int id)
        {
            var post = _context.Posts.FirstOrDefault(post => post.postId == id);
            if (post is null)
            {
                return NotFound("Não existem Post");
            }
            return post;
        }

        [HttpPost]
        public ActionResult Post(Post post)
        {
            if (post is null)
            {
                return BadRequest();
            }

            _context.Posts.Add(post);
            _context.SaveChanges();

            return new CreatedAtRouteResult("ObterPost", new { id = post.postId }, post);
        }
    }
}