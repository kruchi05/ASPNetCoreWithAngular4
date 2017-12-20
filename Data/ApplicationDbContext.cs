using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using WebApplication13.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApplication13.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }
    }
}
