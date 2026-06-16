

exports.geMessage = async (req, res) =>{
    try{
        res.status(200).json({
            message:"Hello Express js use for Student rest Api"
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}