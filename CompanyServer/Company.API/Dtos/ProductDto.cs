namespace Company.API.Dtos
{
    public class ProductDto
    {
        public string? ProductName { get; set; }
        public string? ProductDesc { get; set; }
        public string? ImageUrl { get; set; }

        public int CategoryId { get; set; }
    }
}
