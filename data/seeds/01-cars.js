exports.seed = function(knex) {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert([
                { car_vin: '1HGBH41JXMN109186', car_make: 'Ford', car_model: 'Expedition', car_mileage: 98000, car_title: 'Clear', car_transmission: 'Automatic'},
                { car_vin: '2YXUB78ITVE192047', car_make: 'Subaru', car_model: 'Forester', car_mileage: 67987, car_title: 'Salvage', car_transmission: 'Automatic'},
                { car_vin: '7IVWM92IMWV873184', car_make: 'Honda', car_model: 'Passport', car_mileage: 110892, car_title: 'Clear'}
            ]);
        });
};
