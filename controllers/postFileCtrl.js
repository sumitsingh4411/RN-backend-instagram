const Upload = require('../models/postFile');


const postFileCtrl = {
    homepageimage: async (req, res) => {
        try {
            const { name, email, url } = req.body

            if (!name || !email || !url)
                return res.status(400).json({ msg: "Please fill in all fields." })
            const newUpload = new Upload({
                name, email, url
            })
            await newUpload.save();
            res.json({ msg: "uploaded successfully!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    gethomepageimage: async (req, res) => {
        try {
            const data = await Upload.find();
            res.json(data)

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

}





module.exports = postFileCtrl