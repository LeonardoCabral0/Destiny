using System;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;


namespace WebAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {}

        public DbSet<Post> Posts { get; set;}
    }
}