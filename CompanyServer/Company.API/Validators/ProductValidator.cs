using Company.API.Dtos;
using Company.API.Entites;
using FluentValidation;

namespace Company.API.Validators
{
    public class ProductValidator : AbstractValidator<ProductDto>
    {
        public ProductValidator()
        {
            RuleFor(x => x.ProductName).NotEmpty().WithMessage("Ürün Adı Boş Bırakılamaz.")
                .MinimumLength(5).WithMessage("5 karakterden az ürün adı olamaz.");
            RuleFor(x => x.ImageUrl).NotEmpty().WithMessage("Ürün Görsel URL Boş Bırakılamaz.");
            RuleFor(x => x.CategoryId).NotEmpty().WithMessage("Kategori Boş Bırakılamaz.");
        }
    }
}
