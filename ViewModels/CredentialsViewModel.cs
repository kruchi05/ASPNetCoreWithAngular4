using FluentValidation.Attributes;
using WebApplication13.ViewModels.Validations;

namespace WebApplication13.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
