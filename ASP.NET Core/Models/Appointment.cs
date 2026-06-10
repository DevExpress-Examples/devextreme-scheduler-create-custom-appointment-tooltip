using System;
using System.Collections.Generic;

namespace ASP_NET_Core.Models;
public class Appointment {
    public string Text { get; set; }
    public int EmployeeID { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }

    public static readonly List<Appointment> Appointments = new List<Appointment> {
        new Appointment { Text = "Prepare 2021 Financial", EmployeeID = 2, StartDate = new DateTime(2021, 6, 1, 16, 30, 0), EndDate = new DateTime(2021, 6, 1, 17, 30, 0) },
        new Appointment { Text = "Prepare 2021 Marketing Plan", EmployeeID = 1, StartDate = new DateTime(2021, 6, 1, 16, 30, 0), EndDate = new DateTime(2021, 6, 1, 17, 30, 0) },
        new Appointment { Text = "Update Personnel Files", EmployeeID = 1, StartDate = new DateTime(2021, 6, 1, 16, 30, 0), EndDate = new DateTime(2021, 6, 1, 18, 30, 0) },
        new Appointment { Text = "Review Health Insurance Options", EmployeeID = 2, StartDate = new DateTime(2021, 6, 1, 16, 30, 0), EndDate = new DateTime(2021, 6, 1, 18, 30, 0) },
        new Appointment { Text = "New Brochures", EmployeeID = 1, StartDate = new DateTime(2021, 6, 1, 16, 30, 0), EndDate = new DateTime(2021, 6, 1, 18, 30, 0) },
        new Appointment { Text = "2021 Brochure Designs", EmployeeID = 2, StartDate = new DateTime(2021, 6, 1, 16, 30, 0), EndDate = new DateTime(2021, 6, 1, 18, 30, 0) }
    };
}
