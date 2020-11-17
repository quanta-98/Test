using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Test_api.Startup))]
namespace Test_api
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
