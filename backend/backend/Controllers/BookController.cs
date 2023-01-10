using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private readonly DataContext dbContext;

        public BookController(DataContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooks([FromQuery] PaginationParams @params)
        {
            return Ok(await dbContext.Book.Skip((@params.Page - 1) * @params.itemsPerPage).Take(@params.itemsPerPage).ToListAsync());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetBook([FromRoute] Guid id)
        {
            var book = await dbContext.Book.FindAsync(id);

            if(book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook(AddBookRequest addBookRequest)
        {
            var book = new Book()
            {
                id = Guid.NewGuid(),
                author = addBookRequest.author,
                name = addBookRequest.name,
                overview = addBookRequest.overview
            };

            await dbContext.Book.AddAsync(book);
            await dbContext.SaveChangesAsync();

            return Ok(book);
        }
    }
}
