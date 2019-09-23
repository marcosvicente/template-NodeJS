class HomeController {
    /**
     * @api {get} / Home
     * @apiGroup Home
     *
     * @apiSuccess {String} status Mensagem de acesso autorizado
     *
     * @apiSuccess {json} Sucesso
     *    HTTP/1.1 200 OK
     *    {
     *      "status": "OK!"
     *    }
     *
     */

    index(request, response){
        response.json({status: "Ok!"})
    }
}

module.exports = new HomeController();
