import Link from "../model/link_model.js";

export const save_medium = async (req, res) => {
    try {
        const { medium, urlmedium, platform } = req.body;

        // Update the platform count and set the urlmedium
        const updatedLink = await Link.findOneAndUpdate(
            { medium },
            { 
                $inc: { [platform]: 1 },
                // $set: { urlmedium }
            },
            { new: true, upsert: true }
        );

        // Retrieve the updated platform count
        const platformCount = updatedLink[platform];
        res.status(200).json({message:"Link Generated Successfully" ,platformCount }); // Send back the platform count
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};
