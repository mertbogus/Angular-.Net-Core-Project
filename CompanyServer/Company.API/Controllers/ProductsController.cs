using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Company.API.Context;
using Company.API.Entites;
using Company.API.Dtos;

namespace Company.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, ProductDto productdto)
        {

            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            //manuel mapleme 

            product.ProductName = productdto.ProductName;
            product.ProductDesc = productdto.ProductDesc;
            product.ImageUrl = productdto.ImageUrl;

            product.CategoryId = productdto.CategoryId;


            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(ProductDto product)
        {
            //manuel mapleme 

            var products = new Product()
            {
                ProductName = product.ProductName,
                ProductDesc = product.ProductDesc,
                ImageUrl = product.ImageUrl,
                CategoryId = product.CategoryId
            };


            _context.Products.Add(products);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = products.Id }, products);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
