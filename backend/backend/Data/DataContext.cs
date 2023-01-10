using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options ) : base(options) 
        {
        

        
        }

        public DbSet<Book> Book { get; set; }


       /* protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().
        }*/
    }
}
