const { response } = require('express');
var FormData = require('form-data');
const fetch = require('node-fetch');

const getInformacion = async(req, res = response) => {

    let formData = new FormData();
    formData.append('caso', '6');
    formData.append('desde', '2021-06-01');
    formData.append('hasta', '2021-08-04');

    fetch('http://intranet.colegiocima.edu.pe/v4cima/controlador/load_contabilidad.php',{ body: formData,method: 'post' })
    .then(response => response.json())
    .then( data => {
        res.json({
            ok: true,
            data
        })
    })
   

}
const getInformacionDetalle = async(req, res=response) => {
    fetch(`https://intranet.colegiocima.edu.pe:8443/api/cimapersonal/personal/remuneracion/${req.params.id}?caso=6&desde=2021-06-01&hasta=2021-08-04`)
    .then( response => response.json() )
    .then( data => {
        res.json({
            ok: true,
            data
        })
    } )
}

module.exports = {
    getInformacion,
    getInformacionDetalle
}