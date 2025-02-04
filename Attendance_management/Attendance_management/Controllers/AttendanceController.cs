﻿using Attendance_management.Data;
using Attendance_management.Models;
using Microsoft.AspNetCore.Mvc;
   using Microsoft.EntityFrameworkCore;


using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Attendance_management.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}


        private readonly ApplicationDbContext _context;

        public AttendanceController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Attendance>>> GetAllAttendances()
        {
            var attendances = await _context.Attendances.ToListAsync();
            return Ok(attendances);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Attendance>> GetAttendance(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }
            return Ok(attendance);
        }

        [HttpPost]
        public async Task<ActionResult> AddAttendance(Attendance attendance)
        {
            var newAttendance = new Attendance
            {
                //UserId = attendance.UserId,
                Date = attendance.Date,
                Status = attendance.Status,
                Remarks = attendance.Remarks,
                //CreatedAt = DateTime.UtcNow,
               // UpdatedAt = DateTime.UtcNow
            };

            _context.Attendances.Add(newAttendance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAttendance", new { id = newAttendance.Id }, newAttendance);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateAttendance(int id, Attendance updatedAttendance)
        {
            if (id != updatedAttendance.Id)
            {
                return BadRequest();
            }

            _context.Entry(updatedAttendance).State = EntityState.Modified;
            updatedAttendance.UpdatedAt = DateTime.UtcNow;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                var attendanceExists = await _context.Attendances.AnyAsync(a => a.Id == id);
                if (!attendanceExists)
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

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAttendance(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }

            _context.Attendances.Remove(attendance);
            await _context.SaveChangesAsync();

            return NoContent();
        }



    }
}


/*

using Attendance_management.Data;
using Attendance_management.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Attendance_management.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AttendanceController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Attendance>>> GetAllAttendances()
        {
            var attendances = await _context.Attendances.ToListAsync();
            return Ok(attendances);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Attendance>> GetAttendance(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }
            return Ok(attendance);
        }

        [HttpPost]
        public async Task<ActionResult> AddAttendance(Attendance attendance)
        {
            var newAttendance = new Attendance
            {
                UserId = attendance.UserId,
                Date = attendance.Date,
                Status = attendance.Status,
                Remarks = attendance.Remarks,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Attendances.Add(newAttendance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAttendance", new { id = newAttendance.Id }, newAttendance);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateAttendance(int id, Attendance updatedAttendance)
        {
            if (id != updatedAttendance.Id)
            {
                return BadRequest();
            }

            _context.Entry(updatedAttendance).State = EntityState.Modified;
            updatedAttendance.UpdatedAt = DateTime.UtcNow;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                var attendanceExists = await _context.Attendances.AnyAsync(a => a.Id == id);
                if (!attendanceExists)
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

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAttendance(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }

            _context.Attendances.Remove(attendance);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}


https://chatgpt.com/c/67a174d7-e578-800d-a488-1767b2bbc420

*/
