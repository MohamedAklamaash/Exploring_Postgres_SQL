
const check = (req,res,next)=>{
    try {
        console.log("entering func");
        return res.status(200).json({success:true});
    } catch (error) {
        console.log("error in check func");
    }
}

module.exports = {check}