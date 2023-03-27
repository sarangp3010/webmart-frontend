const DB = require('./db');

function routes(app) {
    // get all data
    app.get('/api/data', async (req, res) => {
        try {
            const data = await DB.Inventory.find();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });

    // get data by id
    app.get('/api/data/:id', async (req, res) => {
        try {
            const data = await DB.Inventory.findById(req.params.id);
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });

    // add data
    app.post('/api/data', async (req, res) => {
        const { name, quantity, image_url } = req.body;

        try {
            const newData = new DB.Inventory({ name, quantity, image_url });
            await newData.save();
            res.json(newData);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });

    // update data
    app.put('/api/data/:id', async (req, res) => {
        const { name, quantity, image_url } = req.body;

        try {
            const data = await DB.Inventory.findById(req.params.id);
            data.name = name;
            data.age = age;
            data.email = email;
            await data.save();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });

    // delete data
    app.delete('/api/data/:id', async (req, res) => {
        try {
            const data = await DB.Inventory.findByIdAndDelete(req.params.id);
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
}

module.exports = {
    routes: routes
}