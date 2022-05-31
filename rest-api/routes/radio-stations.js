const router = require('express').Router();
const RadioStation = require('../models/RadioStation');


//TODO api endpoints

//GET all stations
router.get('/', async (req,res)=>{
    // if(req.oidc.isAuthenticated()){
    try {
        const radiostations = await RadioStation.find();
        res.json(radiostations);
    } catch (error) {
        res.json({message: error});
    }}
    // else{
    //     res.send('Login first')
    // }

 );


//POST create new station
 router.post('/',async(req,res)=>{
    console.log(req.body);
    const radiostation = new RadioStation(req.body);
    // .populate('User');

    try{
        const savedRadioStation = await radiostation.save();
        res.json(savedRadioStation);
        // console.log("Post has been saved by %s",Post.User.username);
    }catch(err){
        res.json({message: err});
        console.log(err);
    }
});

//PATCH update station
router.patch('/:radioStationId',async(req,res) =>{
    try {
        const updatedRadioStation = await RadioStation.updateOne(
            { 
                _id: req.params.radioStationId 
            },
            {
                $set: req.body,
            }, {
                new: true
            }
        );
        res.json(updatedRadioStation);
    } catch (error) {
        res.json({message: error});
    }
})



//DELETE radio station
router.delete('/:radioStationId',async(req,res)=>{
    try {
        const removedRadioStation = await RadioStation.remove({ _id: req.params.radioStationId})
        res.json(removedRadioStation);
    } catch (error) {
        res.json({message: error});
    }
})

 module.exports = router;