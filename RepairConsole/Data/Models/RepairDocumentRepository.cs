﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepairConsole.Data.Models
{
    public class RepairDocumentRepository : IRepairDocumentRepository
    {
        private readonly RepairContext _context;

        public RepairDocumentRepository(RepairContext context)
        {
            _context = context;
        }

        public RepairDocument GetRepairDocument(int id)
        {
            return _context.RepairDocuments.Find(id);
        }

        public ICollection<RepairDocument> GetAllRepairDocuments()
        {
            return _context.RepairDocuments.ToList();
        }

        public RepairDocument AddRepairDocument(RepairDocument document)
        {
            _context.RepairDocuments.Add(document);
            _context.SaveChanges();
            return document;
        }

        public async Task<ICollection<RepairDocument>> AddMultipleRepairDocumentsAsync(ICollection<RepairDocument> documents)
        {
            await _context.RepairDocuments.AddRangeAsync(documents);
            await _context.SaveChangesAsync();
            return documents;
        }
    }
}