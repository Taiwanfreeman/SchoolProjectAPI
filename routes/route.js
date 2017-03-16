var express = require('express');
var router = express.Router();

var mongoOpStatus = require("../model/dbStatus");
var mongoOpControl = require("../model/dbControl");
var mongoOpBand = require("../model/dbBand");
var mongoOpLog = require("../model/dbLog");

var statusID = '58c8e60ea74ae2f21dad75f8';
var controlID = '58c8e350a74ae2f21dad75f6';
var bandID = '58c8e60ea74ae2f21dad75f7';

/* Control Route */
router.route("/control/status/add")
    .get(function(req,res){
      res.render('control/status/add', { title: 'Manual modify Status page '})
    })
    .post(function(req,res){
        var db = new mongoOp();
        var response = {};
        // Add strict validation when you use this in Production.
        db.MQ2 = req.body.MQ2;
        db.MQ7 = req.body.MQ7;
        db.FireDetect = req.body.FireDetect;
        db.Door = req.body.Door;
        db.Temperature = req.body.Temperature;
        db.Humidity = req.body.Humidity;
        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });
router.route("/control/control/add")
    .get(function(req,res){
      res.render('control/control/add', { title: 'Manual modify Control page '})
    })
    .post(function(req,res){
        var db = new mongoOp();
        var response = {};
        // Add strict validation when you use this in Production.
        db.Window = req.body.Window;
        db.Door = req.body.Door;
        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });
router.route("/control/band/add")
    .get(function(req,res){
      res.render('control/band/add', { title: 'Manual modify Band page '})
    })
    .post(function(req,res){
        var db = new mongoOp();
        var response = {};
        // Add strict validation when you use this in Production.
        db.HeartRate = req.body.HeartRate;
        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });
/* Control Route END */
/* Api Routes */
router.route("/api/status")
    .get(function(req,res){
        var response = {};
        mongoOpStatus.findById(statusID,function(err,data){
        // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })
router.route("/api/control")
    .get(function(req,res){
        var response = {};
        mongoOpControl.findById(controlID,function(err,data){
        // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })
router.route("/api/band")
    .get(function(req,res){
        var response = {};
        mongoOpBand.findById(bandID,function(err,data){
        // This will run Mongo Query to fetch data based on ID.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })
router.route("/api/log")
    .get(function(req,res){
        var response = {};
        mongoOpLog.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });
    /* Api Routes End */

    /*Pages Routes */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });

    router.route("/article")
    .get(function(req,res){
        res.render('article/article', { title: 'Express' });
    });
    /*Pages Routes End */

module.exports = router;
