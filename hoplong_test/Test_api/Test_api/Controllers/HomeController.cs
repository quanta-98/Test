using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Test_api.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Class()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult HighCharts()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}