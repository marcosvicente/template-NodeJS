class HomeController {
    index(request, response){
        response.json({status: "Index"})
    }
}

module.exports = new HomeController();
