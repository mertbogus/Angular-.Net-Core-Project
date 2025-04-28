namespace Company.API.Entites
{
    public class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }

        public virtual IList<Product> Products { get; set; }
    }
}
