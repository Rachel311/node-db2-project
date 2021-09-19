const router = require('express').Router();
const db = require('../../data/db-config');
const mw = require('./cars-middleware');
const Car = require('./cars-model')



router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.json(cars);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', mw.checkCarId, async (req, res, next) => {
    try {
        const cars = await Car.getById(req.params.id);
        res.json(cars);
    } catch (err) {
        next(err);
    }
});

router.post('/', mw.checkCarPayload, mw.checkVinNumberUnique, mw.checkVinNumberValid, async (req, res, next) => {
    try {
        const newCar = await Car.create({
           vin: req.body.vin.trim(),
           make: req.body.make,
           model: req.body.model,
           mileage: req.body.mileage, 
        });
        res.status(201).json(newCar);
    } catch (err) {
        next(err);
    }
});

module.exports = router;



