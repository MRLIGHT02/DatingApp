﻿using Microsoft.EntityFrameworkCore;
using System.Runtime.Serialization.DataContracts;
using System.Security.Cryptography.X509Certificates;
using API.Models;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<AppUser> Users { get; set; }




    }



}

