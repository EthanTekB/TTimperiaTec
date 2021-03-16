/**
 * ArrivalListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:function(req, res) {
        ArrivalList.find({}).exec(function(err, Arrivals) {
            if (err) {
                res.send(500, {error: 'Database Error'});
            }
            res.view('list', {arrivallist:Arrivals})
        });
    },
    add: function (req,res) {
        res.view('add')
    },
    create: function (req, res) {
        var title = req.body.title;
        var name = req.body.name;
        var date = req.body.date;
        var time = req.body.time;
        var email = req.body.email;

        ArrivalList.create({ title: title, name: name, date: date, time: time, email: email }).exec(function(err){
            if(err) {
                res.send(500, {error: 'Create in Database Error'})
            }
            res.redirect('/ArrivalList/list');
        });
    },
    delete: function(req, res) {
        ArrivalList.destroy({id:req.params.id }).exec(function(err) {
            if(err) {
                res.send(500, {error: 'Delete in Database Error'})
            }
            res.redirect('/ArrivalList/list');
        });
        return false;
    },
    edit: function(req, res){
        ArrivalList.findOne({id:req.params.id}).exec(function(err, Arrivals){
            if(err){
                res.send(500, {error: 'Edit in Database Error'});
            }
            res.view('edit', {arrivals:Arrivals});
        });
    },
    update: function(req, res){
        var title = req.body.title;
        var name = req.body.name;
        var date = req.body.date;
        var time = req.body.time;
        var email = req.body.email;

        ArrivalList.update({id: req.params.id},{ title: title, name: name, date: date, time: time, email: email }).exec(function(err){
            if(err) {
                res.send(500, {error: 'Create in Database Error'})
            }
            res.redirect('/ArrivalList/list');
        });

    return false;
    }
};

