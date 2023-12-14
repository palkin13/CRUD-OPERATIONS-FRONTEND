using Microsoft.AspNetCore.Mvc;

namespace AjaxApi.Controllers
{
    public class CrudController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Detail() {
            return View();
        }
    }
}
